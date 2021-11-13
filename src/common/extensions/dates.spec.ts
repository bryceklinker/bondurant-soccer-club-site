import {Dates} from './dates';
import {DateRange} from '../state';

describe('Dates', () => {
    describe('formatDate', () => {
        test('when formatting date then returns date in month / day / year', () => {
            expect(Dates.formatDate(new Date(Date.parse('2021-09-23')))).toEqual('09/23/2021');
            expect(Dates.formatDate(new Date(Date.parse('2009-12-03')))).toEqual('12/03/2009');
        });

        test('when date missing then returns not available', () => {
            expect(Dates.formatDate()).toEqual('N/A');
        });
    });

    describe('formatDateRange', () => {
        test('when formatting date range then returns {start} - {end}', () => {
            const range: DateRange = {
                start: new Date(Date.parse('2021-10-23')),
                end: new Date(Date.parse('2022-09-08'))
            };
            expect(Dates.formatDateRange(range)).toEqual('10/23/2021 - 09/08/2022');
        });

        test('when formatting missing date range then returns not available', () => {
            expect(Dates.formatDateRange()).toEqual('N/A');
        });
    });

    describe('formatLongDate', () => {
        test('when formatting long date then returns month day, year', () => {
            expect(Dates.formatLongDate(new Date(Date.parse('2021-09-21')))).toEqual('September 21, 2021');
        });
    });

    describe('formatShortDate', () => {
        test('when formatting short date then returns month day', () => {
            expect(Dates.formatShortDate(new Date(Date.parse('2021-09-21')))).toEqual('September 21st');
        });
    });
});
