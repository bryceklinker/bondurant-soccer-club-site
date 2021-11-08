import React, {FunctionComponent} from 'react';
import {IStackProps, Stack} from '@fluentui/react';

interface GappedStackProps extends Omit<IStackProps, 'tokens'> {
    padded?: boolean;
    flex?: boolean;
}

export const GappedStack: FunctionComponent<GappedStackProps> = ({children, padded, flex, className, ...rest}) => {
    const classes = [
        padded ? 'padded-content' : '',
        flex ? 'flex' : '',
        className ? className : ''
    ]
    return (
        <Stack tokens={{childrenGap: '1em'}} className={classes.join(' ')} {...rest}>
            {children}
        </Stack>
    )
}
