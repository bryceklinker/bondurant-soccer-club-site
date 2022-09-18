import {FunctionComponent} from 'react';
import {Text} from '@fluentui/react';
import {ITextProps} from '@fluentui/react/lib/components/Text/Text.types';

export interface JumboTitleProps extends Omit<ITextProps, 'as' | 'variant'> {

}

export const JumboTitle: FunctionComponent<JumboTitleProps> = ({children, className, ...rest}) => {
    return <Text as={'h1'} variant={'mega'} className={`jumbo-title ${className}`} {...rest}>{children}</Text>
}
