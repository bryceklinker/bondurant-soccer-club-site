import { Season } from './season';
import { AgeRegistrationData } from './age-registration-data';

export interface RegistrationSeasonData {
    season: Season;
    ages: Array<AgeRegistrationData>;
}
