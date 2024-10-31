export class Medicine {
  id!: number;
  medicineName!: string;
  dosageForm!: string;
  instructions!: string;
  medicineStrength!: string;
  price!: number;
  stock!: number;
  createdAt!: string;
  updatedAt!: string;
  manufacturer!: {
    id: number;
    name: string;
  };
}
