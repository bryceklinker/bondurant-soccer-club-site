import React, { FunctionComponent } from 'react';
import { IButtonProps, PrimaryButton } from '@fluentui/react';

export interface LinkButtonProps extends Omit<IButtonProps, 'as' | 'target'> {
    external?: boolean;
}

export const LinkButton: FunctionComponent<LinkButtonProps> = ({
    external,
    ...props
}) => {
    const target = external ? '_blank' : undefined;
    return <PrimaryButton as={'a'} target={target} {...props} />;
};
