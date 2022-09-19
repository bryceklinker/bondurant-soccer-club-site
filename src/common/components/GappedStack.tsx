import {FunctionComponent} from 'react';
import {VStack, StackProps} from '@chakra-ui/react';

interface GappedStackProps extends StackProps {
    padded?: boolean;
    gap?: string | number;
}

export const GappedStack: FunctionComponent<GappedStackProps> = ({
                                                                     children,
                                                                     padded,
                                                                     flex,
                                                                     className,
                                                                     gap = '1em',
                                                                     ...rest
                                                                 }) => {
    const classes = [
        padded ? 'padded-content' : '',
        className ? className : ''
    ];
    return (
        <VStack className={classes.join(' ')} {...rest}>
            {children}
        </VStack>
    );
};
