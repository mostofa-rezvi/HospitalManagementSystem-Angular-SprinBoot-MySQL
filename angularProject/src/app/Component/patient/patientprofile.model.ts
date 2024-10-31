
export class PatientProfileModel {
    name!: string;
    dateOfBirth!: string; // Changed from 'birthday'
    phone!: string;
    email!: string;
    address!: string;
    gender!: string;
    avatar!: string;
    medicalHistory!: MedicalHistory[]; // New field
    allergies!: Allergy[]; // New field
}

export class MedicalHistory {
    condition!: string;
    diagnosisDate!: string;
    notes!: string;
}

export class Allergy {
    substance!: string;
    reaction!: string;
}
