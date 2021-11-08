import {getRegistrationSeason} from './index';
import {AGE_GROUPS, SeasonName} from '../../common';

describe('registration state', () => {
    beforeEach(() => {
        jest.useFakeTimers('modern');
    });

    test('when fall 2021 then U5-U6 age group is 2016-2017', () => {
        setCurrentTime('2021-08-23T00:00:00.000Z');

        const registrationYear = getRegistrationSeason();
        expect(registrationYear.season).toEqual({
            name: SeasonName.Fall,
            startYear: 2021,
            endYear: 2022
        });
        expect(registrationYear.ages).toContainEqual({
            ageGroup: AGE_GROUPS.U6,
            startYear: 2016,
            endYear: 2017,
        });
    });

    test('when spring 2022 then U5-U6 age group is 2016-2017', () => {
        setCurrentTime('2022-02-23T00:00:00.000Z');

        const registrationYear = getRegistrationSeason();
        expect(registrationYear.season).toEqual({
            name: SeasonName.Spring,
            startYear: 2021,
            endYear: 2022
        });
        expect(registrationYear.ages).toContainEqual({
            ageGroup: AGE_GROUPS.U6,
            startYear: 2016,
            endYear: 2017,
        });
    });

    test('when U17-U19 age group then three year age range', () => {
        setCurrentTime('2021-06-23T00:00:00.000Z');

        expect(getRegistrationSeason().ages).toContainEqual({
            ageGroup: AGE_GROUPS.U19,
            startYear: 2003,
            endYear: 2005,
        });
    });

    test('when current date is before june 01 then current season is spring', () => {
        setCurrentTime('2021-05-31');

        expect(getRegistrationSeason().season.name).toEqual(SeasonName.Spring);
    });

    test('when current date is after june 01 then current season is fall', () => {
        setCurrentTime('2021-06-30');

        expect(getRegistrationSeason().season.name).toEqual(SeasonName.Fall);
    });

    test('when current date is June 01 then current season is fall', () => {
        setCurrentTime('2021-06-01');

        expect(getRegistrationSeason().season.name).toEqual(SeasonName.Fall);
    });

    function setCurrentTime(isoTime: string): void {
        jest.setSystemTime(Date.parse(isoTime));
    }
});
