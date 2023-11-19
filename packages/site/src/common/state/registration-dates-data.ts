import { SeasonName } from './season-name';
import { DateRange } from './date-range';

export interface RegistrationDatesData {
    season: SeasonName;
    earlyBird?: DateRange;
    regular?: DateRange;
    late?: DateRange;
    cutoff?: Date;
    u5_u6?: DateRange;
}
