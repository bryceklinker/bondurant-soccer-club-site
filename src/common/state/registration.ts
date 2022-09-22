import {
    LinkData,
    RegistrationDatesData,
    RegistrationSeasonData,
    RegistrationSoftwareData,
    Season,
    SeasonName
} from './models';
import { ALL_AGE_GROUPS } from './age-groups';
import { parseISO } from 'date-fns';

function currentSeason(): Season {
    const currentDate = new Date();
    const seasonName =
        currentDate.getMonth() >= 5 ? SeasonName.Fall : SeasonName.Spring;
    const startYear =
        seasonName === SeasonName.Fall
            ? currentDate.getFullYear()
            : currentDate.getFullYear() - 1;
    return {
        name: seasonName,
        startYear,
        endYear: startYear + 1
    };
}

function currentRegistrationSeason(): RegistrationSeasonData {
    const season = currentSeason();
    return {
        season,
        ages: ALL_AGE_GROUPS.map(g => ({
            ageGroup: g,
            maxBirthYear: season.endYear - g.minAge,
            minBirthYear: season.endYear - g.maxAge
        }))
    };
}

export const FALL_REGISTRATION_DATES: RegistrationDatesData = {
    season: SeasonName.Fall,
    earlyBird: {
        start: parseISO('2021-05-01'),
        end: parseISO('2021-05-14')
    },
    regular: {
        start: parseISO('2021-05-15'),
        end: parseISO('2021-06-14')
    },
    late: {
        start: parseISO('2021-06-15'),
        end: parseISO('2021-06-30')
    },
    cutoff: parseISO('2021-06-30')
};

export const SPRING_REGISTRATION_DATES: RegistrationDatesData = {
    season: SeasonName.Spring,
    earlyBird: {
        start: parseISO('2021-12-01'),
        end: parseISO('2021-12-31')
    },
    regular: {
        start: parseISO('2022-01-01'),
        end: parseISO('2022-01-31')
    },
    late: {
        start: parseISO('2022-02-01'),
        end: parseISO('2022-02-15')
    },
    cutoff: parseISO('2022-02-15')
};

export const REGISTRATION_DATES: Array<RegistrationDatesData> = [
    FALL_REGISTRATION_DATES,
    SPRING_REGISTRATION_DATES
];

export const REGISTER_HERE_LINK: LinkData = {
    text: 'Register Here',
    url: 'https://bondurantsc.demosphere-secure.com/_registration'
};

export const REGISTRATION_SOFTWARE: RegistrationSoftwareData = {
    name: 'Demosphere',
    link: {
        text: 'Demosphere',
        url: 'https://bondurantsc.demosphere-secure.com/_registration'
    }
};

export const Registration = {
    currentSeason,
    currentRegistrationSeason
};
