import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { ExternalLink, ExternalLinkProps } from './ExternalLink';
import { LinkData } from '../state/models';
import { Strings } from '../extensions/strings';

export interface SmartLinkProps extends ExternalLinkProps {
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
