export interface AgeGroup {
    name: string;
    maxAge: number;
    minAge: number;
    cost: number;
}

export interface LinkData {
    text: string;
    url: string;
}

export const AGE_GROUPS: Record<string, AgeGroup> = {
    U6: { name: 'U5 / U6', minAge: 5, maxAge: 6, cost: 65},
    U8: { name: 'U7 / U8', minAge: 7, maxAge: 8, cost: 105},
    U10: { name: 'U9 / U10', minAge: 9, maxAge: 10, cost: 105},
    U12: { name: 'U11 / U12', minAge: 11, maxAge: 12, cost: 115},
    U14: { name: 'U13 / U14', minAge: 13, maxAge: 14, cost: 115},
    U16: { name: 'U15 / U16', minAge: 15, maxAge: 16, cost: 125},
    U19: { name: 'U17 / U19', minAge: 17, maxAge: 19, cost: 125},
}

export const ALL_AGE_GROUPS: Array<AgeGroup> = [
    AGE_GROUPS.U6,
    AGE_GROUPS.U8,
    AGE_GROUPS.U10,
    AGE_GROUPS.U12,
    AGE_GROUPS.U14,
    AGE_GROUPS.U16,
    AGE_GROUPS.U19,
]

export enum SeasonName {
    Fall = 'Fall',
    Spring = 'Spring'
}

export interface Season {
    name: SeasonName,
    startYear: number;
    endYear: number;
}
