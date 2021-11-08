import {AgeGroup, ALL_AGE_GROUPS, Season, SeasonName} from '../../common';

export interface AgeRegistrationData {
    ageGroup: AgeGroup,
    startYear: number;
    endYear: number;
}

export interface RegistrationSeasonData {
    season: Season,
    ages: Array<AgeRegistrationData>;
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
