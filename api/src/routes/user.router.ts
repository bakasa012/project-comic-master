import Router from "@koa/router";
import { DefaultState, Context } from "koa";
import UserController from "../controllers/user.controller";

const router = new Router<DefaultState, Context>({ prefix: "/user" });
const userController = new UserController();
router.get("/", userController.getUserAll);
router.get("/test/", (ctx) => (ctx.body = "aaaaaaaa"));

export default router.routes();
