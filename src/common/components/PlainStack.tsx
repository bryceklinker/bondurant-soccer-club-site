import React, {FunctionComponent} from 'react';
import {IStackProps, Stack} from '@fluentui/react';

export interface PlainStackProps extends IStackProps {
    padded?: boolean;
    flex?: boolean;
}

export const PlainStack: FunctionComponent<PlainStackProps> = ({padded, flex, className, ...rest}) => {
    const classes = [
        padded ? 'padded-content' : '',
        flex ? 'flex' : '',
        className
    ]
    return <Stack className={classes.join(' ')} {...rest} />
}
