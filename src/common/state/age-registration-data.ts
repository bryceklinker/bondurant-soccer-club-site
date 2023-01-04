import { AgeGroup } from './age-groups';

export interface AgeRegistrationData {
    ageGroup: AgeGroup;
    minBirthYear: number;
    maxBirthYear: number;
}
