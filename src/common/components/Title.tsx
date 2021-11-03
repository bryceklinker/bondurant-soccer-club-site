import React, {FunctionComponent} from 'react';
import {Text} from '@fluentui/react';

export interface TitleProps {
}

export const Title: FunctionComponent<TitleProps> = ({children}) => {
    return <Text as={'h3'} variant={'mega'}>{children}</Text>
}
