import userRouter from "./user.router";
import adminRouter from "./admin.router";
import Router from "@koa/router";
import { DefaultState, Context } from "koa";

const router = new Router<DefaultState, Context>({ prefix: "/api" });
router.use(userRouter);
router.use(adminRouter);
router.get("/data/", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = "aaaaaaaaaaaa";
});
export default router.routes();
