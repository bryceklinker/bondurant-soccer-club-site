import { TitleItem } from './title-item';

export interface ByLawSectionData extends TitleItem {
    key: string;
    items?: Array<string>;
}
