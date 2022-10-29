import { FunctionComponent } from 'react';

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

export interface TitleItem {
    title: string;
    description?: string | FunctionComponent;
}

export enum SeasonName {
    Fall = 'Fall',
    Spring = 'Spring'
}

export interface Season {
    name: SeasonName;
    startYear: number;
    endYear: number;
}

export enum BoardMemberRoleGroup {
    Official = 'Officials',
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
    DirectorOfU5U6 = 'Director of U5/U6',
    DirectorOfCommunications = 'Director of Communications',
    DirectorOfConcessions = 'Director of Concessions',
    DirectorOfEquipment = 'Director of Equipment',
    DirectorOfAcademyOperations = 'Director of Academy Operations',
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
        return members.map(m => m.email).filter(e => e && e !== '');
    },
    getMailtoEmails: (members: Array<BoardMemberData>): string => {
        return BoardMemberData.getEmails(members).join(',');
    },
    getEmailForRole: (
        role: BoardMemberRole,
        members: Array<BoardMemberData>
    ): string => {
        const membersInRole = members.filter(b => b.role === role);
        return BoardMemberData.getMailtoEmails(membersInRole);
    }
};

export interface GetInvolvedData extends TitleItem {
    links: Array<LinkData>;
}

export interface Address {
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
}

export interface LocationData {
    title: string;
    ageGroups: Array<AgeGroup>;
    mapsUrl: string;
    address: Address;
}

export interface AgeRegistrationData {
    ageGroup: AgeGroup;
    minBirthYear: number;
    maxBirthYear: number;
}

export interface RegistrationSeasonData {
    season: Season;
    ages: Array<AgeRegistrationData>;
}

export interface RegistrationDatesData {
    season: SeasonName;
    earlyBird?: DateRange;
    regular?: DateRange;
    late?: DateRange;
    cutoff?: Date;
}

export interface PictureAccessData {
    phoneNumber: string;
    accessCode: string;
}

export enum UniformSize {
    YXS = 'Youth X-Small',
    YS = 'Youth Small',
    YM = 'Youth Medium',
    YL = 'Youth Large',
    AS = 'Adult Small',
    AM = 'Adult Medium',
    AL = 'Adult Large',
    AXL = 'Adult X-Large',
    AXXL = 'Adult XX-Large',
    AXXXL = 'Adult XXX-Large'
}

export enum UniformPart {
    Jersey = 'Jersey',
    Shorts = 'Shorts',
    Socks = 'Socks',
    Kit = 'Kit'
}

export interface UniformPurchaseOption {
    part: UniformPart;
    count: number;
    cost: number;
}

export interface ProgramInfoAttribute {
    name: string;
    details?: Array<string>;
    link?: LinkData;
    text?: string;
}

export interface ProgramInfo extends TitleItem {
    attributes: Array<ProgramInfoAttribute>;
}

export interface ByLawSectionData extends TitleItem {
    key: string;
    items?: Array<string>;
}

export interface ByLawArticleData {
    key: string;
    title: string;
    text?: string;
    sections?: Array<ByLawSectionData>;
    items?: Array<string>;
}

export interface ByLawsData {
    title: string;
    location: string;
    articles: Array<ByLawArticleData>;
    signature: string;
    date: string;
}

export interface FrequentlyAskedQuestionData {
    question: string;
    answer: string;
    links?: Array<LinkData>;
}

export interface RegistrationSoftwareData {
    name: string;
    link: LinkData;
}
