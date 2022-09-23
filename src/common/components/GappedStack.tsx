import { FunctionComponent } from 'react';
import { ColumnFlex, ColumnFlexProps } from '../layout/ColumnFlex';
import { PADDED_CONTENT_PROPS } from '../layout/flex-styles';

interface GappedStackProps extends Omit<ColumnFlexProps, 'tokens'> {
    padded?: boolean;
    gap?: string | number;
}

export const GappedStack: FunctionComponent<GappedStackProps> = ({
    padded,
    gap = '1em',
    ...rest
}) => {
    const paddedProps = padded ? PADDED_CONTENT_PROPS : {};
    return <ColumnFlex gap={gap} {...paddedProps} {...rest} />;
};
