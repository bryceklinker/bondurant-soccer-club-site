import {AGE_GROUPS, AgeGroup} from '../../common/state';

export interface LocationData {
    title: string;
    ageGroups: Array<AgeGroup>
    mapsUrl: string;
}

export const LOCATIONS: Array<LocationData> = [
    {
        title: 'East Complex',
        ageGroups: [AGE_GROUPS.U12, AGE_GROUPS.U12, AGE_GROUPS.U14, AGE_GROUPS.U16, AGE_GROUPS.U18],
        mapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831.8125451746096!2d-93.44485538456422!3d41.708111079236026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzI5LjIiTiA5M8KwMjYnMzMuNiJX!5e1!3m2!1sen!2sus!4v1636040209004!5m2!1sen!2sus'
    },
    {
        title: 'West Complex',
        ageGroups: [AGE_GROUPS.U6, AGE_GROUPS.U8],
        mapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.22973675532!2d-93.47202198456442!3d41.70111107923665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzA0LjAiTiA5M8KwMjgnMTEuNCJX!5e1!3m2!1sen!2sus!4v1636040689552!5m2!1sen!2sus'
    }
]
