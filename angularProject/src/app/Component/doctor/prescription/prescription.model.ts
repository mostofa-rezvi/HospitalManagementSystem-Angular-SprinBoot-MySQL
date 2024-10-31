import { Role, UserModel } from "../../../user/user.model";
import { Test } from "../../laboratorist/test/test.model";
import { Medicine } from "../../pharmacist/medicine/medicine.model";

export class Prescription {
    id!: number;
    prescriptionDate!: Date;
    notes!: string;
    createdAt!: Date;
    updatedAt!: Date;

    test!: Test;

    medicine: Medicine [] = [];

    user!: UserModel;

}

