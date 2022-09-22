import { format } from 'date-fns';
import { DateRange } from '../state';

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

export const Dates = {
    formatDate,
    formatDateRange,
    formatLongDate,
    formatShortDate
};
