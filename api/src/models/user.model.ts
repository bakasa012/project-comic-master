import { Model, DataTypes } from "sequelize";
import sequelize from "../sequelize";
import RoleModel, { RoleModelProps } from "./role.model";
export interface UserModelProps extends Model {
  readonly id: number;
  username: string;
  password: string;
  fullName: string;
  email: string;
  userRoleId: number;
  userRole?: RoleModelProps;
  getRoles: any;
}

const UserModel = sequelize.define<UserModelProps>("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  fullName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  userRoleId: {
    type: DataTypes.STRING,
  },
});

RoleModel.belongsToMany(UserModel, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
  as: "roles",
});

UserModel.belongsToMany(RoleModel, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
  as: "roles",
});

export default UserModel;
