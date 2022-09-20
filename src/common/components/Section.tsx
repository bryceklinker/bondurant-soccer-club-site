import {FunctionComponent} from 'react';
import {Flex, FlexProps, HStack, StackProps, VStack} from '@chakra-ui/react';

export interface SectionProps extends Omit<FlexProps, 'shadow'> {
    inverted?: boolean;
    shadow?: boolean;
    padded?: boolean;
    horizontal?: boolean;
    fullWidth?: boolean;
}

export const Section: FunctionComponent<SectionProps> = ({
                                                             children,
                                                             shadow,
                                                             padded,
                                                             flex,
                                                             className,
                                                             horizontal,
                                                             ...rest
                                                         }) => {
    const classes = [
        'section',
        shadow ? 'shadow' : '',
        padded ? 'padded-content' : '',
        className ? className : ''
    ];

    return (
        <Flex flexDirection={horizontal ? 'row' : 'column'} {...rest} className={classes.join(' ')}>
            {children}
        </Flex>
    );
};
