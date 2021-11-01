import {AGE_GROUPS, AgeGroup} from '../../common/state';

export interface LocationData {
    title: string;
    description: string;
    ageGroups: Array<AgeGroup>
    mapsUrl: string;
}

export const LOCATIONS: Array<LocationData> = [
    {
        title: 'East Complex',
        description: '',
        ageGroups: [AGE_GROUPS.U12, AGE_GROUPS.U12, AGE_GROUPS.U14, AGE_GROUPS.U16, AGE_GROUPS.U18],
        mapsUrl: 'https://goo.gl/maps/EGdT7bjU5kXeosCcA'
    },
    {
        title: 'West Complex',
        description: '',
        ageGroups: [AGE_GROUPS.U6, AGE_GROUPS.U8],
        mapsUrl: 'https://goo.gl/maps/zBZPProXgyhYQNBK9'
    }
]
