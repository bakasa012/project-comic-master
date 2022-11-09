import { Sequelize } from "sequelize";
const databaseUrl =
  process.env.DB_URI || "postgres://gsol:gsol@localhost:5432/geo_database_test";
const sequelize = new Sequelize(databaseUrl, {
  logging: false,
  benchmark: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
});
export default sequelize;
