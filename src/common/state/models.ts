import {FunctionComponent} from 'react';

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

export interface DateRange {
    start: Date;
    end: Date;
}

export enum SeasonName {
    Fall = 'Fall',
    Spring = 'Spring'
}

export interface Season {
    name: SeasonName,
    startYear: number;
    endYear: number;
}

export enum BoardMemberRoleGroup {
    Elected = 'Elected Officials',
    Directors = 'Directors',
    AtLarge = 'At Large Members'
}

export enum BoardMemberRole {
    President = 'President',
    VicePresident = 'Vice President',
    Treasurer = 'Treasurer',
    Secretary = 'Secretary',
    Registrar = 'Registar',
    DirectorOfReferees = 'Director of Referees',
    DirectorOfFields = 'Director of Fields',
    DirectorOfCoaches = 'Director of Coaches',
    DirectorOfCommunications = 'Director of Communications',
    DirectorOfConcessions = 'Director of Concessions',
    DirectorOfEquipment = 'Director of Equipment',
    AtLarge = 'At-Large'
}

export interface BoardMemberData {
    roleTitle: string;
    role: BoardMemberRole;
    name: string;
    email: string;
    roleGroup: BoardMemberRoleGroup;
}

export const BoardMemberData = {
    getEmails: (members: Array<BoardMemberData>): Array<string> => {
        return members.map(m => m.email);
    },
    getMailtoEmails: (members: Array<BoardMemberData>): string => {
        return BoardMemberData.getEmails(members).join(',');
    }
}

export interface GetInvolvedData {
    title: string;
    description: string | FunctionComponent;
    links: Array<LinkData>;
}

export interface LocationData {
    title: string;
    ageGroups: Array<AgeGroup>;
    mapsUrl: string;
}

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

export interface ImageData {
    title: string;
    image: any;
}
