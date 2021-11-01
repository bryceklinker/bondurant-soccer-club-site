export interface AgeGroup {
    name: string;
    maxAge: number;
}

export interface LinkData {
    text: string;
    url: string;
}

export const AGE_GROUPS = {
    U6: { name: 'U5/U6', maxAge: 6},
    U8: { name: 'U7/U8', maxAge: 8},
    U10: { name: 'U9/U10', maxAge: 10},
    U12: { name: 'U11/U12', maxAge: 12},
    U14: { name: 'U13/U14', maxAge: 14},
    U16: { name: 'U15/U16', maxAge: 16},
    U18: { name: 'U17/U18', maxAge: 18},
}

export const ALL_AGE_GROUPS: Array<AgeGroup> = [
    AGE_GROUPS.U6,
    AGE_GROUPS.U8,
    AGE_GROUPS.U10,
    AGE_GROUPS.U12,
    AGE_GROUPS.U14,
    AGE_GROUPS.U16,
    AGE_GROUPS.U18,
]
