export type Grouping<TItem> = { key: string; items: Array<TItem> };

function groupBy<TItem>(
    items: Array<TItem>,
    key: (i: TItem) => string
): Array<Grouping<TItem>> {
    const groups = items.reduce(
        (result, value) => ({
            ...result,
            [key(value)]: [...(result[key(value)] || []), value]
        }),
        {} as Record<string, Array<TItem>>
    );

    return Object.keys(groups).map(key => ({ key, items: groups[key] }));
}

export const Arrays = {
    groupBy
};
