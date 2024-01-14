import { TitleItem } from './title-item';
import { LinkData } from './link-data';

export interface VolunteerOpportunitiesData extends TitleItem {
    links?: Array<LinkData>;
}
