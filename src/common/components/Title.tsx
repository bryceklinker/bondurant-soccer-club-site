import React, { FunctionComponent } from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

export type TitleProps = Omit<HeadingProps, 'as' | 'variant'>;

export const Title: FunctionComponent<TitleProps> = props => {
    return <Heading as={'h3'} variant={'xxLarge'} {...props} />;
};
