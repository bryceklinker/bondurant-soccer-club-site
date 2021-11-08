import {AgeGroup, ALL_AGE_GROUPS, DateRange, Season, SeasonName} from '../../common';
import {parseISO} from 'date-fns';

export interface AgeRegistrationData {
    ageGroup: AgeGroup,
    startYear: number;
    endYear: number;
}

export interface RegistrationSeasonData {
    season: Season,
    ages: Array<AgeRegistrationData>;
}

export interface RegistrationDatesData {
    season: SeasonName;
    earlyBird?: DateRange;
    regular?: DateRange;
    late?: DateRange;
    cutoff?: Date;
}

export function getSeason(): Season {
    const currentDate = new Date();
    const seasonName = currentDate.getMonth() >= 5 ? SeasonName.Fall : SeasonName.Spring;
    const startYear = seasonName === SeasonName.Fall
        ? currentDate.getFullYear()
        : currentDate.getFullYear() - 1;
    return {
        name: seasonName,
        startYear,
        endYear: startYear + 1
    }
}

export function getRegistrationSeason(): RegistrationSeasonData {
    const season = getSeason();
    return {
        season,
        ages: ALL_AGE_GROUPS.map(g => ({
            ageGroup: g,
            endYear: season.endYear - g.minAge,
            startYear: season.endYear - g.maxAge
        }))
    }
}

export function getRegistrationDates(): Array<RegistrationDatesData> {
    return [
        {
            season: SeasonName.Fall,
            earlyBird: {
                start: parseISO('2021-07-01'),
                end: parseISO('2021-07-31'),
            },
            regular: {
                start: parseISO('2021-08-01'),
                end: parseISO('2021-08-30')
            },
            late: {
                start: parseISO('2021-09-01'),
                end: parseISO('2021-09-15')
            },
            cutoff: parseISO('2021-09-15'),
        },
        {
            season: SeasonName.Spring,
            earlyBird: {
                start: parseISO('2021-12-01'),
                end: parseISO('2021-12-31'),
            },
            regular: {
                start: parseISO('2022-01-01'),
                end: parseISO('2022-01-31')
            },
            late: {
                start: parseISO('2022-02-01'),
                end: parseISO('2022-02-15')
            },
            cutoff: parseISO('2022-02-15'),
        }
    ]
}
