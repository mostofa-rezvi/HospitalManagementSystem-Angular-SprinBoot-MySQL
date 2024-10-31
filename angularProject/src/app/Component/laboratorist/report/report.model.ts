import { UserModel } from "../../../user/user.model";
import { Test } from "../test/test.model";

export class Report {
  id!: number;

    reportName!: string;
    reportResult!: string;

    description!: string;
    sampleId!: string;
    interpretation!: string;

    testDate!: Date;
    createdAt!: Date;
    updatedAt!: Date;

    user!: UserModel;
    test!: Test;
}
