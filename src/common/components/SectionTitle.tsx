import React, {FunctionComponent} from 'react';
import {ITextProps, Text} from '@fluentui/react';

export interface SectionTitleProps extends Omit<ITextProps, 'as'> {
}

export const SectionTitle: FunctionComponent<SectionTitleProps> = ({children, ...rest}) => {
    return (
        <Text as={'h2'} variant={'xLarge'}>
            {children}
        </Text>
    );
};
