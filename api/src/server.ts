import app from './koa';
import debug from 'debug';
import sequelize from './sequelize';
import dotenv from 'dotenv';

dotenv.config();
const logger = debug('server');
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT);
/**
 * start|listening server
 */
server.on('listening', () => {
  const address = server.address();
  const bind = address ? (typeof address === 'string' ? `pipe ${address}` : `port ${address.port}`) : '';
  logger(`Listening on ${bind} - ${process.env.NODE_ENV}`);
});

server.on('error', (error) => {
  console.log(error);
});

process.on('SIGINT', () => process.exit());

process.on('exit', () => server.close());

/**
 *  connect to MySQL Databases
 * */
const databaseUrl = process.env.DB_URI || 'postgres://gsol:gsol@localhost:5432/geo_database_test';
sequelize.sync({ alter: false, force: false }).catch((err: Error) => err.toString());
sequelize
  .authenticate()
  .then(async () => {
    logger(`Connected to PostgreSQL: ${databaseUrl}`);
  })
  .catch((err: Error) => logger(`Unable to connect to the PostgreSQL: ${err.toString()}`));
