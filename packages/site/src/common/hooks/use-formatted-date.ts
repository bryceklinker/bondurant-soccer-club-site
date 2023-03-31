import {useMemo} from 'react';
import {Dates} from '../extensions/dates';

export function useFormattedDate(date?: string | null): string {
    return useMemo(() => {
        return Dates.safeFormatDate(date);
    }, [date]);
}
