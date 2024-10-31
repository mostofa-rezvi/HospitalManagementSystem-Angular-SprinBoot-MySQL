import {UserModel} from "../../../user/user.model";

export class DepartmentModel {
  id!: number;
  departmentName!: string;
  description!: string;
  users!: UserModel[];
}
