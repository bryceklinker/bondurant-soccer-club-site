import {LinkData} from '../state';

export const RouteNames = {
    ContactUs: 'contact-us',
    GetInvolved: 'get-involved',
    About: 'about',
    Home: '/',
    Locations: 'locations',
    Schedules: 'schedules',
    RegistrationInfo: 'registration-info',
    Concessions: 'concessions',
    PictureDay: 'picture-day',
}

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
]

export const MORE_INFO_NAVIGATION_LINKS: Array<LinkData> = [
    {
        text: 'Concessions',
        url: RouteNames.Concessions
    },
    {
        text: 'Registration Info',
        url: RouteNames.RegistrationInfo
    },
    {
        text: 'Picture Day',
        url: RouteNames.PictureDay
    }
]
