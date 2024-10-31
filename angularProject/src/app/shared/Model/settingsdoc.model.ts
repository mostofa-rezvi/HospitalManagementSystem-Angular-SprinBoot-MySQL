export class SettingsDocModel {
    id!: number;
    doctorId!: number;
    notificationEnabled!: boolean;
    emailAlerts!: boolean;
    smsAlerts!: boolean;
    timezone!: string;
    workingHours!: string;
    language!: string;
    customPreferences?: any;
}
