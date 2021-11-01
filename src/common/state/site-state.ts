import {CLUB_VALUES, ClubValue} from './club-value';

export interface SiteState {
    clubValues: Array<ClubValue>;
}

export const SITE_STATE: SiteState = {
    clubValues: CLUB_VALUES
}


