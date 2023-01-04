import { TitleItem } from './title-item';
import { LinkData } from './link-data';

export interface GetInvolvedData extends TitleItem {
    links: Array<LinkData>;
}
