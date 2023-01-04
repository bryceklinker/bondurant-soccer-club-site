import { TitleItem } from './title-item';
import { ProgramInfoAttribute } from './program-info-attribute';

export interface ProgramInfo extends TitleItem {
    attributes: Array<ProgramInfoAttribute>;
}
