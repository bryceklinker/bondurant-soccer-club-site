import React, { FunctionComponent } from 'react';
import { IStackProps, Stack } from '@fluentui/react';

interface GappedStackProps extends Omit<IStackProps, 'tokens'> {
    padded?: boolean;
    flex?: boolean;
    gap?: string | number;
}

export const GappedStack: FunctionComponent<GappedStackProps> = ({
    children,
    padded,
    flex,
    className,
    gap = '1em',
    ...rest
}) => {
    const classes = [
        padded ? 'padded-content' : '',
        flex ? 'flex' : '',
        className ? className : ''
    ];
    return (
        <Stack
            tokens={{ childrenGap: gap }}
            className={classes.join(' ')}
            {...rest}>
            {children}
        </Stack>
    );
};
