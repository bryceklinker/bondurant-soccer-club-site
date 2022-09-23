import { FunctionComponent } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

export interface LinkButtonProps extends Omit<ButtonProps, 'as' | 'target'> {
    href: string;
    external?: boolean;
}

export const LinkButton: FunctionComponent<LinkButtonProps> = ({
    external,
    ...props
}) => {
    const target = external ? '_blank' : undefined;
    return <Button as={'a'} target={target} {...props} />;
};
