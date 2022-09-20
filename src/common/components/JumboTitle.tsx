import {FunctionComponent} from 'react';
import {Heading, TextProps} from '@chakra-ui/react';

export interface JumboTitleProps extends Omit<TextProps, 'as' | 'variant'> {

}

export const JumboTitle: FunctionComponent<JumboTitleProps> = ({children, className, ...rest}) => {
    return <Heading as={'h1'} color={'white'} {...rest}>{children}</Heading>
}
