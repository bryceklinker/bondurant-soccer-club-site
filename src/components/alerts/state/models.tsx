export type AlertModel = {
    id: string;
    severity: AlertSeverity;
    text: string;
};

export enum AlertSeverity {
    High = 'High'
}
