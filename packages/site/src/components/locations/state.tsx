import { AGE_GROUPS } from '../../common/state/age-groups';
import { LocationData } from '../../common/state/location-data';
import { LinkData } from '../../common/state/link-data';
import { RouteNames } from '../../common/routing/route-names';

export const COLLISON_SOCCER_PARK_LOCATION: LocationData = {
    title: 'Collison Soccer Park',
    ageGroups: [AGE_GROUPS.U6, AGE_GROUPS.U8, AGE_GROUPS.U10],
    mapsUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.22973675532!2d-93.47202198456442!3d41.70111107923665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzA0LjAiTiA5M8KwMjgnMTEuNCJX!5e1!3m2!1sen!2sus!4v1636040689552!5m2!1sen!2sus',
    address: {
        streetAddress: '315 2nd St. NW',
        city: 'Bondurant',
        state: 'Iowa',
        zip: '50035'
    },
    fieldLayouts: [
        {
            title: 'All Fields',
            image: 'collison_soccer_park',
            alt: 'Arial view of all Collison soccer park fields'
        }
    ]
};

export const BONDURANT_RECREATIONAL_SPORTS_COMPLEX_LOCATION = {
    title: 'Bondurant Recreational Sports Complex',
    ageGroups: [AGE_GROUPS.U12, AGE_GROUPS.U14, AGE_GROUPS.U16, AGE_GROUPS.U19],
    mapsUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831.8125451746096!2d-93.44485538456422!3d41.708111079236026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzI5LjIiTiA5M8KwMjYnMzMuNiJX!5e1!3m2!1sen!2sus!4v1636040209004!5m2!1sen!2sus',
    address: {
        streetAddress: '1850 Jr. Haines Pkwy',
        city: 'Bondurant',
        state: 'Iowa',
        zip: '50035'
    },
    fieldLayouts: [
        {
            title: 'All Fields',
            image: 'bsc_east_complex',
            alt: 'Arial view from north looking south'
        }
    ]
};
export const COLLISON_SOCCER_PARK_LINK: LinkData = {
    text: COLLISON_SOCCER_PARK_LOCATION.title,
    url: RouteNames.Locations
};
export const LOCATIONS: Array<LocationData> = [
    BONDURANT_RECREATIONAL_SPORTS_COMPLEX_LOCATION,
    COLLISON_SOCCER_PARK_LOCATION
];
