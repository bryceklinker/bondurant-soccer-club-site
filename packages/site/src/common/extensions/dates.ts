import {format, parseISO} from 'date-fns';
import { DateRange } from '../state/date-range';

function formatForInput(date?: Date): string {
    return date ? format(date, 'yyyy-MM-dd') : '';
}

function formatDate(date?: Date): string {
    return date ? format(date, 'MM/dd/yyyy') : 'N/A';
}

function formatDateRange(range?: DateRange): string {
    return range
        ? `${formatDate(range.start)} - ${formatDate(range.end)}`
        : 'N/A';
}

function formatLongDate(date?: Date): string {
    return date ? format(date, 'MMMM d, yyyy') : 'N/A';
}

function formatShortDate(date?: Date): string {
    return date ? format(date, 'MMMM do') : 'N/A';
}

function safeParse(date?: string | null): Date | null {
    return date ? Dates.parse(date) : null;
}

function safeFormatDate(value?: string | null): string {
    const date = safeParse(value);
    return date ? formatDate(date) : '';
}

function safeFormatForInput(value?: string | null) : string {
    const parsed = safeParse(value);
    return parsed ? formatForInput(parsed) : '';
}

export const Dates = {
    parse: parseISO,
    safeParse,
    safeFormatDate,
    safeFormatForInput,
    formatForInput,
    formatDate,
    formatDateRange,
    formatLongDate,
    formatShortDate
};
