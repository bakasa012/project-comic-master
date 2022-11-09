import { Model, DataTypes } from "sequelize";
import { RoleName } from "../configs/interfaces/role.interface";
import sequelize from "../sequelize";

export interface RoleModelProps extends Model {
  readonly id: number;
  roleName: RoleName;
}

const RoleModel = sequelize.define<RoleModelProps>("role", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  roleName: {
    type: DataTypes.ENUM,
    values: Object.values(RoleName),
    allowNull: false,
  },
});

RoleModel.sync().then(() => {
  RoleModel.findOrCreate({
    defaults: { roleName: RoleName.adminRole },
    where: { roleName: RoleName.adminRole },
  });
  RoleModel.findOrCreate({
    defaults: { roleName: RoleName.userRole },
    where: { roleName: RoleName.userRole },
  });
  RoleModel.findOrCreate({
    defaults: { roleName: RoleName.moderatorRole },
    where: { roleName: RoleName.moderatorRole },
  });
});
export default RoleModel;
