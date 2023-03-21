import { FC } from 'react';
import { ColumnFlex, ColumnFlexProps } from '../layout/ColumnFlex';
import {
    PADDED_CONTENT_CLASS_NAME,
    SECTION_SHADOW_CLASS_NAME
} from '../layout/flex-styles';
import { ClassNames } from '../extensions/class-names';

export interface SectionProps extends Omit<ColumnFlexProps, 'shadow'> {
    shadow?: boolean;
    padded?: boolean;
}

export const Section: FC<SectionProps> = ({
    children,
    shadow,
    padded,
    className,
    ...rest
}) => {
    const classes = ClassNames.join(
        shadow ? SECTION_SHADOW_CLASS_NAME : undefined,
        padded ? PADDED_CONTENT_CLASS_NAME : undefined,
        'bg-white flex-initial border-b-blue-700 border-b-4',
        className
    );
    return (
        <ColumnFlex className={classes} {...rest}>
            {children}
        </ColumnFlex>
    );
};
