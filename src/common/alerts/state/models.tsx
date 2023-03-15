export type AlertModel = {
    id: string;
    status: AlertSeverity;
    text: string;
};

export enum AlertSeverity {
    High = 'High'
}
