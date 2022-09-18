import React, {FunctionComponent} from 'react';
import {Text, ITextProps} from '@fluentui/react';
import styles from './SubTitle.module.css';

export interface SubTitleProps extends Omit<ITextProps, 'as'> {
}

export const SubTitle: FunctionComponent<SubTitleProps> = ({children, ...rest}) => {
    const className = rest.className ? `${styles.subTitle} ${rest.className}` : styles.subTitle;
    return <Text as={'h4'} variant={'mediumPlus'} {...rest} className={className}>{children}</Text>
}
