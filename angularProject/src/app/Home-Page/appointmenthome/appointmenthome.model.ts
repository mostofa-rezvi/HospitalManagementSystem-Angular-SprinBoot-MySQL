export class Root {
    
    id!: string; 
    patientName!: string;
    patientEmail!: string;
    appointmentDate!: string; // ISO format date string
    appointmentTime!: string; // ISO format time string


    departments!: {
        id: string;
        name: string;
    };
    doctors!: {
        drid: string;
        firstname: string; 
    };
   
}