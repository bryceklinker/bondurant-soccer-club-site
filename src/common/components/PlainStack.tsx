import { FunctionComponent } from 'react';
import { ColumnFlex, ColumnFlexProps } from '../layout/ColumnFlex';
import { PADDED_CONTENT_CLASS_NAME } from '../layout/flex-styles';
import { RowFlex } from '../layout/RowFlex';

export type PlainStackProps = ColumnFlexProps & {
    padded?: boolean;
    horizontal?: boolean;
};

export const PlainStack: FunctionComponent<PlainStackProps> = ({
    padded,
    horizontal,
    className,
    ...rest
}) => {
    const paddedClass = padded ? PADDED_CONTENT_CLASS_NAME : '';
    const Element = horizontal ? RowFlex : ColumnFlex;
    return <Element className={`${paddedClass} ${className}`} {...rest} />;
};
