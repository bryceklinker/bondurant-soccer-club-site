import { FunctionComponent } from 'react';
import './JumboTitle.css';
import { Heading, HeadingProps } from '@chakra-ui/react';

export interface JumboTitleProps extends Omit<HeadingProps, 'as' | 'variant'> {}

export const JumboTitle: FunctionComponent<JumboTitleProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <Heading
            as={'h1'}
            variant={'mega'}
            className={`jumbo-title ${className}`}
            {...rest}>
            {children}
        </Heading>
    );
};
