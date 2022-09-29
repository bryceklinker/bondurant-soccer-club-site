import { FC } from 'react';
import { ColumnFlex, ColumnFlexProps } from '../layout/ColumnFlex';
import {
    PADDED_CONTENT_CLASS_NAME,
    SECTION_SHADOW_CLASS_NAME
} from '../layout/flex-styles';

export interface SectionProps extends Omit<ColumnFlexProps, 'shadow'> {
    shadow?: boolean;
    padded?: boolean;
}

export const Section: FC<SectionProps> = ({
    children,
    shadow,
    padded,
    className,
    flex = 'initial',
    ...rest
}) => {
    const shadowClass = shadow ? SECTION_SHADOW_CLASS_NAME : '';
    const paddedClass = padded ? PADDED_CONTENT_CLASS_NAME : '';
    const borderClass = 'border-b-blue-700 border-b-4';

    return (
        <ColumnFlex
            flex={flex}
            className={`bg-white ${shadowClass} ${paddedClass} ${borderClass} ${className} `}
            {...rest}>
            {children}
        </ColumnFlex>
    );
};
