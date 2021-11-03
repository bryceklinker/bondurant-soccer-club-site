import {IStackProps, Stack} from '@fluentui/react';
import React, {FunctionComponent} from 'react';

export interface SectionProps extends IStackProps {
    inverted?: boolean;
}

export const Section: FunctionComponent<SectionProps> = ({children, ...rest}) => {
    return (
        <Stack {...rest}>
            {children}
        </Stack>
    )
}
