import { Context, Next } from "koa";
import jwt from "jsonwebtoken";
import httpStatus from "http-status";
import { PayLoad } from "../configs/interfaces/token.interface";
import UserModel from "../models/user.model";

/**
 * Get token information from cookie request
 * @param ctx A Context is created per request, and is referenced in middleware as the receiver, or the ctx identifier
 * @returns object or null
 */
export function getToken(ctx: Context): PayLoad | null {
  const cookieName = process.env.COOKIE_NAME || "auth__";
  const getToken = ctx.cookies.get(cookieName);
  if (getToken) {
    const decode = DecodeJsonWebToken(getToken);
    return decode;
  } else {
    return null;
  }
}

/**
 * Check the user's access rights, check if the user is logged in or not, or check which role the user belongs to
 * @param ctx A Context is created per request, and is referenced in middleware as the receiver, or the ctx identifier
 * @param next Whether next () is called in three or not does not affect bubbles. If next () is not called, it will not be passed to the next middleware. At this time three can be regarded as a common method.
 */
export function verifyToken(ctx: Context, next: Next) {
  const cookieName = process.env.COOKIE_NAME || "auth__";
  const getToken = ctx.cookies.get(cookieName);
  if (getToken) {
    const decode = DecodeJsonWebToken(getToken);
    if (!decode) {
      ctx.response.status = httpStatus.UNAUTHORIZED;
      ctx.response.body = { message: "Access is not allowed" };
      return ctx;
    }

    const ts = Math.round(new Date().getTime() / 1000);
    if (ts > decode.exp) {
      ctx.response.status = httpStatus.UNAUTHORIZED;
      ctx.response.body = { message: "Access is not allowed" };
      return ctx;
    }
    ctx.userId = decode.id;
    return next();
  } else {
    ctx.response.status = httpStatus.UNAUTHORIZED;
    ctx.response.body = { message: "Access is not allowed" };
    return ctx;
  }
}

export function isAdmin(ctx: Context, next: Next) {
  const userId = ctx.userId;
  UserModel.findByPk(userId).then((user) => {
    user.getRoles();
  });
}

/**
 * Decode Json Web Token from token to render object containing id, username, ...
 * @param token - To put it simply, a token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the sender’s identity. The important distinction here is lack of meaning within the characters themselves.
 * @returns {id: number, username: string, fullName: string, iat: string, exp: string, ...}
 * @type {(token: string)=> {id: number, username: string, ...}}
 */
function DecodeJsonWebToken(token: string): PayLoad | null {
  const secretKey = process.env.SECRET_KEY;
  const decodeToken: PayLoad | null = jwt.verify(
    token,
    secretKey,
    (err, decoded: PayLoad) => {
      if (err) return undefined;
      return decoded;
    }
  ) as unknown as PayLoad | null;
  return decodeToken;
}
