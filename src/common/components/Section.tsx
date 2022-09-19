import {FunctionComponent} from 'react';
import {HStack, StackProps, VStack} from '@chakra-ui/react';

export interface SectionProps extends Omit<StackProps, 'shadow'> {
    inverted?: boolean;
    shadow?: boolean;
    padded?: boolean;
    horizontal?: boolean;
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

    const Stack = horizontal ? HStack : VStack;
    return (
        <Stack {...rest} className={classes.join(' ')}>
            {children}
        </Stack>
    );
};
