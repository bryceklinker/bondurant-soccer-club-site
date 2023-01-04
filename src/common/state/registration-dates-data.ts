import { SeasonName } from './season-name';
import { DateRange } from './date-range';

export interface RegistrationDatesData {
    season: SeasonName;
    earlyBird?: DateRange;
    regular?: DateRange;
    late?: DateRange;
    cutoff?: Date;
}
