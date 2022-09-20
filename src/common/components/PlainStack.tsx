import {FunctionComponent} from 'react';
import {StackProps, VStack, HStack, Flex} from '@chakra-ui/react';

export interface PlainStackProps extends StackProps {
    padded?: boolean;
    gap?: string | number;
    horizontal?: boolean;
}

export const PlainStack: FunctionComponent<PlainStackProps> = ({horizontal, padded, flex, className, gap, ...rest}) => {
    const classes = [
        padded ? 'padded-content' : '',
        className
    ];
    return <Flex direction={horizontal ? 'row' : 'column'} className={classes.join(' ')}  {...rest} />
}
