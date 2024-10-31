export class UserModel {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  cell!: number;
  age!: number;
  gender!: string;
  birthday!: Date;
  address!: string;
  image!: string;
  doctorDegree!: string;
  doctorSpeciality!: string;
  doctorLicense!: string;
  nurseDegree!: string;
  nurseSpeciality!: string;
  nurseLicense!: string;
  departmentId!: number;
  role!: Role;
}

export enum Role {
  ADMIN = 'ADMIN',
  PATIENT = 'PATIENT',
  DOCTOR = 'DOCTOR',
  NURSE = 'NURSE',
  RECEPTIONIST = 'RECEPTIONIST',
  PHARMACIST = 'PHARMACIST',
  LAB = 'LAB'
}

export const UserRoleMap: { value: Role, label: string }[] = [
  { value: Role.ADMIN, label: 'Administrator' },
  { value: Role.PATIENT, label: 'Patient' },
  { value: Role.DOCTOR, label: 'Doctor' },
  { value: Role.NURSE, label: 'Nurse' },
  { value: Role.RECEPTIONIST, label: 'Receptionist' },
  { value: Role.PHARMACIST, label: 'Pharmacist' },
  { value: Role.LAB, label: 'Lab' }
]