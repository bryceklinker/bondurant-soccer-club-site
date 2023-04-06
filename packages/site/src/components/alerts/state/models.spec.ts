import { ModelFactory } from '../../../testing';
import { CreateAlertModelSchema, prepareAlertForApi } from './models';

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

    describe('prepareAlertForApi', () => {
        test('when alert is prepared for api then times are in utc', () => {
            const model = ModelFactory.alert({
                startDate: '2022-08-01T09:12:00',
                expirationDate: '2022-09-01T09:12:00'
            });

            const prepped = prepareAlertForApi(model);

            expect(prepped.id).toEqual(model.id);
            expect(prepped.text).toEqual(model.text);
            expect(prepped.severity).toEqual(model.severity);
            expect(prepped.startDate).toEqual('2022-08-01T09:12:00.000Z');
            expect(prepped.expirationDate).toEqual('2022-09-01T09:12:00.000Z');
        });

        test('when alert is missing dates then dates are mising', () => {
            const model = ModelFactory.alert({
                startDate: null,
                expirationDate: null
            });

            const prepped = prepareAlertForApi(model);

            expect(prepped.id).toEqual(model.id);
            expect(prepped.text).toEqual(model.text);
            expect(prepped.severity).toEqual(model.severity);
            expect(prepped.startDate).toEqual(null);
            expect(prepped.expirationDate).toEqual(null);
        });
    });
});
