import React, { FunctionComponent } from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

export interface SubTitleProps extends Omit<HeadingProps, 'as'> {}

export const SubTitle: FunctionComponent<SubTitleProps> = ({
    children,
    ...rest
}) => {
    const className = rest.className
        ? `sub-title ${rest.className}`
        : 'sub-title';
    return (
        <Heading
            as={'h4'}
            variant={'mediumPlus'}
            {...rest}
            className={className}>
            {children}
        </Heading>
    );
};
