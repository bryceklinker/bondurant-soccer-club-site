import { AgeGroup } from './age-groups';
import { Address } from './address';

export interface LocationData {
    title: string;
    ageGroups: Array<AgeGroup>;
    mapsUrl: string;
    address: Address;
}
