import { FC } from 'react';

import {
    ColumnFlex,
    ColumnFlexProps,
    PADDED_CONTENT_PROPS,
    SECTION_SHADOW_PROPS
} from '../layout';

export interface SectionProps extends Omit<ColumnFlexProps, 'shadow'> {
    shadow?: boolean;
    padded?: boolean;
}

export const Section: FC<SectionProps> = ({
    children,
    shadow,
    padded,
    className,
    borderBottomColor = 'blue',
    borderBottomStyle = 'solid',
    borderBottomWidth = '0.5em',
    backgroundColor = 'white',
    ...rest
}) => {
    const shadowProps = shadow ? SECTION_SHADOW_PROPS : {};
    const paddedProps = padded ? PADDED_CONTENT_PROPS : {};

    return (
        <ColumnFlex
            borderBottomWidth={borderBottomWidth}
            borderBottomStyle={borderBottomStyle}
            borderBottomColor={borderBottomColor}
            backgroundColor={backgroundColor}
            className={className}
            {...shadowProps}
            {...paddedProps}
            {...rest}>
            {children}
        </ColumnFlex>
    );
};
