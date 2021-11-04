import {GET_INVOLVED_OPTIONS, GetInvolvedData} from '../get-involved/state';
import {BOARD_MEMBERS, BoardMemberData} from '../contact-us/state';
import {LocationData, LOCATIONS} from '../locations/state';
import {SCHEDULE_IMAGES, ScheduleImageData} from '../schedules/state';

export interface SiteState {
    year: number;
    getInvolvedOptions: Array<GetInvolvedData>;
    boardMembers: Array<BoardMemberData>;
    locations: Array<LocationData>;
    scheduleImages: Array<ScheduleImageData>;
}

export const SITE_STATE: SiteState = {
    year: new Date().getFullYear(),
    getInvolvedOptions: GET_INVOLVED_OPTIONS,
    boardMembers: BOARD_MEMBERS,
    locations: LOCATIONS,
    scheduleImages: SCHEDULE_IMAGES
}


