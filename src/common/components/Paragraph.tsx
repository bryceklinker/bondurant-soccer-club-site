import React, {FunctionComponent} from 'react';
import {Text, ITextProps} from '@fluentui/react';

export interface ParagraphProps extends Omit<ITextProps, 'as'> {

}

export const Paragraph: FunctionComponent<ParagraphProps> = ({children, ...rest}) => {
    return <Text as={'p'} variant={'large'} {...rest}>{children}</Text>
}
