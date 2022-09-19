import {FunctionComponent} from 'react';
import {StackProps, VStack, HStack} from '@chakra-ui/react';

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
    if (horizontal) {
        return <HStack className={classes.join(' ')}  {...rest} />
    }
    return <VStack className={classes.join(' ')}  {...rest} />
}
