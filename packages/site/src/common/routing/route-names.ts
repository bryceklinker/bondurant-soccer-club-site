import { LinkData } from '../state/link-data';

export const RouteNames = {
    About: '/about',
    AcademyProgram: '/academy-program',
    Alerts: '/alerts',
    DirectorOfAcademy: '/academy-program/director-of-academy',
    ContactUs: '/contact-us',
    Documents: '/documents',
    FrequentlyAskedQuestions: '/frequently-asked-questions',
    VolunteerOpportunities: '/volunteer-opportunities',
    Home: '/',
    Locations: '/locations',
    PictureDay: '/picture-day',
    ProgramInfo: '/program-info',
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
        text: 'Volunteer Opportunities',
        url: RouteNames.VolunteerOpportunities
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
        text: 'Alerts',
        url: RouteNames.Alerts,
        requiresUser: true
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
