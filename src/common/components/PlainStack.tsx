import React, { FunctionComponent } from 'react';
import {
    ColumnFlex,
    ColumnFlexProps,
    PADDED_CONTENT_PROPS,
    RowFlex
} from '../layout';

export type PlainStackProps = ColumnFlexProps & {
    padded?: boolean;
    horizontal?: boolean;
};

export const PlainStack: FunctionComponent<PlainStackProps> = ({
    padded,
    horizontal,
    ...rest
}) => {
    const paddedProps = padded ? PADDED_CONTENT_PROPS : {};
    const Element = horizontal ? RowFlex : ColumnFlex;
    return <Element {...paddedProps} {...rest} />;
};
