import React, {FunctionComponent} from 'react';
import {Text} from '@fluentui/react';

export interface SubTitleProps {
}

export const SubTitle: FunctionComponent<SubTitleProps> = ({children}) => {
    return <Text as={'h5'}>{children}</Text>
}
