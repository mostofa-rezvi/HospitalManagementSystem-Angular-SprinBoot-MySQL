import {Medicine} from "../medicine/medicine.model";

export class MedicineBill {
  id!: number;
  name!: string;
  phone!: number;
  email!: string;
  address!: string;
  invoiceDate!: Date;
  totalAmount!: number;
  amountPaid!: number;
  balance!: number;
  status!: string;
  description!: string;
  createdAt!: string;
  updatedAt!: string;

  medicineList: Medicine[] = [];
}
