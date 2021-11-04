import {IStackProps, Stack} from '@fluentui/react';
import React, {FunctionComponent} from 'react';
import './Section.css';

export interface SectionProps extends IStackProps {
    inverted?: boolean;
    shadow?: boolean;
}

export const Section: FunctionComponent<SectionProps> = ({children, shadow, ...rest}) => {
    const className = shadow ? `shadow ${rest.className}` : rest.className;
    return (
        <Stack {...rest} className={`section ${className}`}>
            {children}
        </Stack>
    )
}
