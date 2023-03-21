const NUMBER_TO_LETTER: Record<number, string> = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J'
};

function formatCurrency(value?: number): string {
    if (!value) {
        return 'N/A';
    }
    return `$${value?.toFixed(2)}`;
}

function asLetter(value?: number): string {
    if (!value) {
        return '';
    }

    return NUMBER_TO_LETTER[value];
}

export const Numbers = {
    formatCurrency,
    asLetter
};
