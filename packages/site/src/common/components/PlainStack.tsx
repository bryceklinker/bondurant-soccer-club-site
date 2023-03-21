import { FunctionComponent } from 'react';
import { ColumnFlex, ColumnFlexProps } from '../layout/ColumnFlex';
import { PADDED_CONTENT_CLASS_NAME } from '../layout/flex-styles';
import { RowFlex } from '../layout/RowFlex';
import { ClassNames } from '../extensions/class-names';

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
    const Element = horizontal ? RowFlex : ColumnFlex;
    const classes = ClassNames.join(
        padded ? PADDED_CONTENT_CLASS_NAME : undefined,
        className
    );
    return <Element className={classes} {...rest} />;
};
