import React, {FunctionComponent} from 'react';
import {Text, ITextProps} from '@fluentui/react';

export interface SubTitleProps extends Omit<ITextProps, 'as'> {
}

export const SubTitle: FunctionComponent<SubTitleProps> = ({children, ...rest}) => {
    const className = rest.className ? `sub-title ${rest.className}` : 'sub-title';
    return <Text as={'h4'} variant={'mediumPlus'} {...rest} className={className}>{children}</Text>
}
