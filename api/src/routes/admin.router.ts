import Router from "@koa/router";
import { DefaultState, Context } from "koa";
import UserController from "../controllers/user.controller";
const router = new Router<DefaultState, Context>({ prefix: "/admin" });

const userController = new UserController();
router.get("/", userController.getUserAll);
export default router.routes();
