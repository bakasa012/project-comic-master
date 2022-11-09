import { RoleName } from "./role.interface";

export interface PayLoad {
  id: number;
  username: string;
  role: RoleName;
  fullName: string;
  iat: number;
  exp: number;
}
