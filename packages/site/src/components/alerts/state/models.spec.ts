import { ModelFactory } from '../../../testing';
import { CreateAlertModelSchema } from './models';

describe('Alert Models', () => {
    describe('CreateAlertModel', () => {
        test.each([
            ['severity', undefined],
            ['severity', null],
            ['severity', ''],
            ['text', undefined],
            ['text', null],
            ['text', '']
        ])('when %s is missing then returns invalid', (key, value) => {
            const model = {
                ...ModelFactory.alert(),
                [key]: value
            };

            expect(CreateAlertModelSchema.safeParse(model).success).toEqual(
                false
            );
        });

        test('when expiration is after start date then returns invalid', () => {
            const model = ModelFactory.alert({
                startDate: '2023-03-26',
                expirationDate: '2014-03-27'
            });

            expect(CreateAlertModelSchema.safeParse(model).success).toEqual(
                false
            );
        });

        test('when all properties have values then returns valid', () => {
            const model = ModelFactory.alert({
                startDate: '2023-03-26',
                expirationDate: '2023-04-30'
            });

            expect(CreateAlertModelSchema.safeParse(model).success).toEqual(
                true
            );
        });

        test('when minimal properties have values then returns valid', () => {
            const model = ModelFactory.alert({
                startDate: null,
                expirationDate: null
            });

            expect(CreateAlertModelSchema.safeParse(model).success).toEqual(
                true
            );
        });
    });
});
