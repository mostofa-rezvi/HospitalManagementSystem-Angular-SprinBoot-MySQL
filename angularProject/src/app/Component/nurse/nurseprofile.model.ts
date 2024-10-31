// nurse-profile.model.ts
export class NurseProfileModel {
    name!: string;
    specialization!: string;
    phone!: string;
    email!: string;
    birthday!: string;
    address!: string;
    gender!: string;
    avatar!: string;
    licenseNumber!: string; // Changed from employeeId to licenseNumber
    education!: Education[];
    experience!: Experience[];
}

export class Education {
    institution!: string;
    degree!: string;
    startYear!: string;
    endYear!: string;
}

export class Experience {
    position!: string;
    startDate!: string;
    endDate!: string;
}
