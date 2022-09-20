import {FunctionComponent} from 'react';
import {Heading, HeadingProps, Text} from '@chakra-ui/react';

export interface SubTitleProps extends Omit<HeadingProps, 'as'> {
}

export const SubTitle: FunctionComponent<SubTitleProps> = ({children, ...rest}) => {
    const className = rest.className ? `sub-title ${rest.className}` : 'sub-title';
    return <Text as={'p'} variant={'mediumPlus'} {...rest} className={className}>{children}</Text>
}
