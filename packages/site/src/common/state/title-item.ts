import { FunctionComponent } from 'react';

export interface TitleItem {
    title: string;
    description?: string | FunctionComponent;
}
