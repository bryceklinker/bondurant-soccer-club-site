import { ByLawArticleData } from './by-law-article-data';

export interface ByLawsData {
    title: string;
    location: string;
    articles: Array<ByLawArticleData>;
    signature: string;
    date: string;
}
