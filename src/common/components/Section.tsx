import {IStackProps, Stack} from '@fluentui/react';
import React, {FunctionComponent} from 'react';
import styles from './Section.module.css';

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
        styles.section,
        shadow ? styles.shadow : '',
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
