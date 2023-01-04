import { LinkData } from '../state/link-data';

export const RouteNames = {
    About: '/about',
    AcademyProgram: '/academy-program',
    DirectorOfAcademyJobDescription: '/academy-program/director-of-academy',
    Concessions: '/concessions',
    ContactUs: '/contact-us',
    Documents: '/documents',
    FrequentlyAskedQuestions: '/frequently-asked-questions',
    GetInvolved: '/get-involved',
    Home: '/',
    Locations: '/locations',
    PictureDay: '/picture-day',
    ProgramInfo: '/program-info',
    RefereeInfo: '/referee-info',
    RegistrationInfo: '/registration-info',
    Schedules: '/schedules',
    SponsorshipInfo: '/sponsorship-info',
    U5U6Info: '/u5-u6-info',
    UniformInfo: '/uniform-info'
};

export const MAIN_NAVIGATION_LINKS: Array<LinkData> = [
    {
        text: 'Home',
        url: RouteNames.Home
    },
    {
        text: 'Get Involved',
        url: RouteNames.GetInvolved
    },
    {
        text: 'Contact Us',
        url: RouteNames.ContactUs
    },
    {
        text: 'About',
        url: RouteNames.About
    },
    {
        text: 'Locations',
        url: RouteNames.Locations
    },
    {
        text: 'Schedules',
        url: RouteNames.Schedules
    }
];

export const MORE_INFO_NAVIGATION_LINKS: Array<LinkData> = [
    {
        text: 'Academy Program',
        url: RouteNames.AcademyProgram
    },
    {
        text: 'Concessions',
        url: RouteNames.Concessions
    },
    {
        text: 'Documents',
        url: RouteNames.Documents
    },
    {
        text: 'FAQ',
        url: RouteNames.FrequentlyAskedQuestions
    },
    {
        text: 'Picture Day',
        url: RouteNames.PictureDay
    },
    {
        text: 'Program Info',
        url: RouteNames.ProgramInfo
    },
    {
        text: 'Referee Info',
        url: RouteNames.RefereeInfo
    },
    {
        text: 'Registration Info',
        url: RouteNames.RegistrationInfo
    },
    {
        text: 'Sponsorship Info',
        url: RouteNames.SponsorshipInfo
    },
    {
        text: 'U5/U6 Info',
        url: RouteNames.U5U6Info
    },
    {
        text: 'Uniform Info',
        url: RouteNames.UniformInfo
    }
];
