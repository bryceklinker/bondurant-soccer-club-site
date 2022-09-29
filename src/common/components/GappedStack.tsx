import { FunctionComponent } from 'react';
import { ColumnFlex, ColumnFlexProps } from '../layout/ColumnFlex';
import { PADDED_CONTENT_CLASS_NAME } from '../layout/flex-styles';

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
    const paddedClass = padded ? PADDED_CONTENT_CLASS_NAME : '';
    const gappedClass = gap ? 'gap-4' : '';
    return (
        <ColumnFlex
            className={`${paddedClass} ${gappedClass} ${className}`}
            {...rest}
        />
    );
};
