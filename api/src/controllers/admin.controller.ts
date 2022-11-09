import UserModel from "../models/user.model";
import { Context } from "koa";
import httpStatus from "http-status";

export default class UserController {
  public getUserAll(ctx: Context) {
    return UserModel.findAll().then((data) => {
      if (data) {
        ctx.response.status = httpStatus.OK;
        ctx.response.body = data;
        return ctx;
      }
      ctx.response.status = httpStatus.OK;
      ctx.response.body = [];
      return ctx;
    });
  }
}
