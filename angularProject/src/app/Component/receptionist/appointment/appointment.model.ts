import { UserModel } from "../../../user/user.model";


export class AppointmentModel {
  id!: number;
  name!: string;
  email!: string;
  phone!: string;
  gender!: string;
  age!: number;
  birthday!: Date;
  date!: Date;
  time!: string;
  notes!: string;

  requestedBy: UserModel = new UserModel();
  doctor: UserModel = new UserModel();
}
