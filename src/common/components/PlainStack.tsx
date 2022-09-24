import { FunctionComponent } from 'react';
import { ColumnFlex, ColumnFlexProps } from '../layout/ColumnFlex';
import { PADDED_CONTENT_PROPS } from '../layout/flex-styles';
import { RowFlex } from '../layout/RowFlex';

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
