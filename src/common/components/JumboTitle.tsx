import {FunctionComponent} from 'react';
import {Text, TextProps} from '@chakra-ui/react';

export interface JumboTitleProps extends Omit<TextProps, 'as' | 'variant'> {

}

export const JumboTitle: FunctionComponent<JumboTitleProps> = ({children, className, ...rest}) => {
    return <Text as={'h1'} variant={'mega'} className={`jumbo-title ${className}`} {...rest}>{children}</Text>
}
