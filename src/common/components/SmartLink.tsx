import React, { FunctionComponent } from 'react';
import { ILinkProps } from '@fluentui/react';
import { Link } from '@reach/router';
import { LinkData } from '../state';
import { Strings } from '../extensions';
import { ExternalLink } from './ExternalLink';

export interface SmartLinkProps extends Omit<ILinkProps, 'as'> {
    link: LinkData;
}

export const SmartLink: FunctionComponent<SmartLinkProps> = ({
    link,
    ...rest
}) => {
    if (Strings.isExternalLink(link.url)) {
        return (
            <ExternalLink href={link.url} {...rest}>
                {link.text}
            </ExternalLink>
        );
    }

    return <Link to={link.url}>{link.text}</Link>;
};
