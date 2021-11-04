export interface ScheduleImageData {
    title: string;
    image: any;
}

export const SCHEDULE_IMAGES: Array<ScheduleImageData> = [
    {
        title: 'U5/U6 Schedule',
        image: require('../../assets/u5_u6_schedule.jpg'),
    },
    {
        title: 'U7/U8 Coed Schedule',
        image: require('../../assets/u7_u8_coed_schedule.jpeg'),
    },
    {
        title: 'U7/U8 Girls Schedule',
        image: require('../../assets/u7_u8_girls_schedule.jpeg'),
    }
]
