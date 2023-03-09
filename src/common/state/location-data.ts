import { AgeGroup } from './age-groups';
import { Address } from './address';

export interface LocationData {
    title: string;
    ageGroups: Array<AgeGroup>;
    mapsUrl: string;
    address: Address;

    fieldLayouts: Array<FieldLayoutData>;
}

export interface FieldLayoutData {
    title: string;
    image: string;
    alt: string;
}
