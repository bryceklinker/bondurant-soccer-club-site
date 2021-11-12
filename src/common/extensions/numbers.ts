function formatCurrency(value?: number): string {
    if (!value) {
        return 'N/A';
    }
    return `$${value?.toFixed(2)}`
}

export const Numbers = {
    formatCurrency
}
