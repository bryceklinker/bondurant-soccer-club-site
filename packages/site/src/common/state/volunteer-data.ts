import { TitleItem } from './title-item';
import { LinkData } from './link-data';

export interface VolunteerData extends TitleItem {
    links?: Array<LinkData>;
}
