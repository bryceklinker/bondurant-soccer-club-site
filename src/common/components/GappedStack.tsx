import React, {FunctionComponent} from 'react';
import {IStackProps, Stack} from '@fluentui/react';

interface GappedStackProps extends Omit<IStackProps, 'tokens'> {
}

export const GappedStack: FunctionComponent<GappedStackProps> = ({children, ...rest}) => {
    return (
        <Stack tokens={{childrenGap: '1em'}} {...rest}>
            {children}
        </Stack>
    )
}
