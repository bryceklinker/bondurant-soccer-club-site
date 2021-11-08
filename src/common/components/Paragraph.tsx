import React, {FunctionComponent} from 'react';
import {Text, ITextProps} from '@fluentui/react';

export interface ParagraphProps extends ITextProps {

}

export const Paragraph: FunctionComponent<ParagraphProps> = ({children, ...rest}) => {
    return <Text as={'p'} variant={'large'} block {...rest}>{children}</Text>
}
