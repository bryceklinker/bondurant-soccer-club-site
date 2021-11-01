import {GET_INVOLVED_OPTIONS, GetInvolvedData} from '../get-involved/state';
import {BOARD_MEMBERS, BoardMemberData} from '../contact-us/state';
import {LocationData, LOCATIONS} from '../locations/state';

export interface SiteState {
    year: number;
    getInvolvedOptions: Array<GetInvolvedData>;
    boardMembers: Array<BoardMemberData>;
    locations: Array<LocationData>;
}

export const SITE_STATE: SiteState = {
    year: new Date().getFullYear(),
    getInvolvedOptions: GET_INVOLVED_OPTIONS,
    boardMembers: BOARD_MEMBERS,
    locations: LOCATIONS
}


