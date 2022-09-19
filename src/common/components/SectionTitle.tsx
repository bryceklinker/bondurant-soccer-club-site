import {FunctionComponent} from 'react';
import {TextProps, Text} from '@chakra-ui/react';

export interface SectionTitleProps extends Omit<TextProps, 'as'> {
}

export const SectionTitle: FunctionComponent<SectionTitleProps> = ({children, ...rest}) => {
    return (
        <Text as={'h2'} variant={'xLarge'}>
            {children}
        </Text>
    );
};
