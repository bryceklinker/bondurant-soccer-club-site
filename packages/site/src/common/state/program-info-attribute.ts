import { LinkData } from './link-data';

export interface ProgramInfoAttribute {
    name: string;
    details?: Array<string>;
    link?: LinkData;
    text?: string;
}
