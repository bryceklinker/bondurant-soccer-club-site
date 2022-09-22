import { ImageData, LinkData } from './models';
import { RouteNames } from '../routing';

export const SCHEDULE_IMAGES: Array<ImageData> = [
    {
        title: 'U5/U6 Schedule',
        image: require('../../assets/u5_u6_schedule.jpg')
    },
    {
        title: 'U7/U8 Coed Schedule',
        image: require('../../assets/u7_u8_coed_schedule.jpeg')
    },
    {
        title: 'U7/U8 Girls Schedule',
        image: require('../../assets/u7_u8_girls_schedule.jpeg')
    }
];

export const U9_AND_UP_SCHEDULE_LINK: LinkData = {
    text: 'here',
    url: 'https://iowasoccer.demosphere-secure.com/schedules/click-here-for-isl-rec-central-schedules'
};

export const SCHEDULES_LINK: LinkData = {
    text: 'Schedules',
    url: RouteNames.Schedules
};
