import { FunctionComponent } from 'react';
import { ColumnFlex, ColumnFlexProps } from '../layout/ColumnFlex';
import { PADDED_CONTENT_CLASS_NAME } from '../layout/flex-styles';
import { ClassNames } from '../extensions/class-names';

export type GappedStackProps = ColumnFlexProps & {
    padded?: boolean;
    gap?: boolean;
};

export const GappedStack: FunctionComponent<GappedStackProps> = ({
    padded,
    gap = true,
    className,
    ...rest
}) => {
    const classes = ClassNames.join(
        padded ? PADDED_CONTENT_CLASS_NAME : undefined,
        gap ? 'gap-4' : undefined,
        className
    );
    return <ColumnFlex className={classes} {...rest} />;
};
