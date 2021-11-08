import React, {FunctionComponent} from 'react';
import {ILinkProps, Link} from '@fluentui/react';
import {Paragraph} from './Paragraph';

interface ExternalLinkProps extends Omit<ILinkProps, 'target'> {
}

export const ExternalLink: FunctionComponent<ExternalLinkProps> = ({children, ...rest}) => {
    return (
        <Paragraph as={'span'} block={false}>
            <Link target={'_blank'} {...rest}>
                {children}
            </Link>
        </Paragraph>
    );
};
