import { LinkData } from './link-data';

export interface FrequentlyAskedQuestionData {
    question: string;
    answer: string;
    links?: Array<LinkData>;
}
