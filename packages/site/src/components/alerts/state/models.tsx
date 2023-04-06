import { z } from 'zod';

export enum AlertSeverity {
    High = 'High'
}

export const CreateAlertModelSchema = z
    .object({
        severity: z.nativeEnum(AlertSeverity),
        text: z.string().nonempty(),
        startDate: z
            .string()
            .transform(arg => (arg ? new Date(arg).toISOString() : null))
            .nullish(),
        expirationDate: z
            .string()
            .transform(arg => (arg ? new Date(arg).toISOString() : null))
            .nullish()
    })
    .refine(
        model => {
            if (model.expirationDate && model.startDate) {
                return model.expirationDate > model.startDate;
            }
            return true;
        },
        {
            message: 'Expiration date must be after start date',
            path: ['expirationDate']
        }
    );

export const AlertModelSchema = CreateAlertModelSchema.and(
    z.object({
        id: z.string().uuid()
    })
);

export type CreateAlertModel = z.infer<typeof CreateAlertModelSchema>;
export type AlertModel = z.infer<typeof AlertModelSchema>;

export function prepareAlertForApi<T extends CreateAlertModel>(model: T): T {
    return {
        ...model,
        startDate: model.startDate
            ? new Date(model.startDate).toISOString()
            : null,
        expirationDate: model.expirationDate
            ? new Date(model.expirationDate).toISOString()
            : null
    };
}
