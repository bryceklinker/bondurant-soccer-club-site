import React, {FunctionComponent} from 'react';
import {Text, ITextProps} from '@fluentui/react';

export interface SubTitleProps extends Omit<ITextProps, 'as'> {
}

export const SubTitle: FunctionComponent<SubTitleProps> = ({children, ...rest}) => {
    return <Text as={'h5'} {...rest}>{children}</Text>
}
