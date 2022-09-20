import {FunctionComponent} from 'react';
import {StackProps, Flex} from '@chakra-ui/react';

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
        <Flex flex={1} direction={'column'} gap={'1.5em'} className={classes.join(' ')} {...rest}>
            {children}
        </Flex>
    );
};
