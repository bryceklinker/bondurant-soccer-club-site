import React, {FunctionComponent} from 'react';
import {Separator} from '@fluentui/react';

export interface DividerProps {

}

export const Divider: FunctionComponent<DividerProps> = ({children}) => {
    return <Separator>{children}</Separator>
}
