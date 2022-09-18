import React, {FC, PropsWithChildren} from 'react';
import {Text} from '@fluentui/react';

export const Title: FC<PropsWithChildren> = ({children}) => {
    return <Text as={'h3'} variant={'xxLarge'}>{children}</Text>
}
