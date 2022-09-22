import { IStackProps, Stack } from '@fluentui/react';
import React, { FunctionComponent } from 'react';
import './Section.css';

export interface SectionProps extends IStackProps {
    inverted?: boolean;
    shadow?: boolean;
    padded?: boolean;
    flex?: boolean;
}

export const Section: FunctionComponent<SectionProps> = ({
    children,
    shadow,
    padded,
    flex,
    className,
    ...rest
}) => {
    const classes = [
        'section',
        shadow ? 'shadow' : '',
        padded ? 'padded-content' : '',
        flex ? 'flex' : '',
        className ? className : ''
    ];
    return (
        <Stack {...rest} className={classes.join(' ')}>
            {children}
        </Stack>
    );
};
