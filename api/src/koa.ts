import Router from "@koa/router";
import Koa, { DefaultState, Context } from "koa";
import helmet from "koa-helmet";
import bodyParser from "koa-bodyparser";
import compress from "koa-compress";
import logger from "koa-logger";
import routerIndex from "./routes";
const app = new Koa();
const router = new Router<DefaultState, Context>();
app.use(helmet());
app.use(
  bodyParser({
    jsonLimit: "10mb",
  })
);
app.use(compress());
app.use(logger());
router.use(routerIndex);
console.log(router.stack.map((i) => i.path));
app.use(router.routes());
/** Error handler */
app.on("error", (error) => console.error(error));

export default app;
