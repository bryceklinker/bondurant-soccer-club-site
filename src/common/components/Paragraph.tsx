import {FunctionComponent} from 'react';
import {Text} from '@fluentui/react';

export const Paragraph: FunctionComponent = ({children}) => {
    return <Text as={'p'}>{children}</Text>
}
