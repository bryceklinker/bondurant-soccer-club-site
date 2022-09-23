import { FunctionComponent } from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

export interface SectionTitleProps extends Omit<HeadingProps, 'as'> {}

export const SectionTitle: FunctionComponent<SectionTitleProps> = ({
    children,
    ...rest
}) => {
    return (
        <Heading as={'h2'} variant={'xLarge'} {...rest}>
            {children}
        </Heading>
    );
};
