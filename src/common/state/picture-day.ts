import { parseISO } from 'date-fns';
import { LinkData, PictureAccessData } from './models';

export const PICTURES_DATE = parseISO('2021-09-21');

export const PICTURES_COMPANY_LINK: LinkData = {
    text: 'Next Level Photography',
    url: 'https://www.facebook.com/nextlevelportrait/'
};

export const PICTURES_ACCESS: PictureAccessData = {
    accessCode: 'BSC2021',
    phoneNumber: '90738'
};
