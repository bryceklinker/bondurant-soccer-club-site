import { ByLawSectionData } from './by-law-section-data';

export interface ByLawArticleData {
    key: string;
    title: string;
    text?: string;
    sections?: Array<ByLawSectionData>;
    items?: Array<string>;
}
