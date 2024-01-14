import React, { FC, FunctionComponent, useMemo } from 'react';
import { Link } from 'gatsby';
import { ExternalLink, ExternalLinkProps } from './ExternalLink';
import { Strings } from '../extensions/strings';
import { LinkData } from '../state/link-data';
import { PlainStack } from './PlainStack';

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

export type SmartLinkListProps = {
    links: LinkData[];
};

export const SmartLinkList: FC<SmartLinkListProps> = ({ links }) => {
    const items = useMemo(
        () => links.map(l => <SmartLink link={l} />),
        [links]
    );
    return <PlainStack className={'gap-1'}>{items}</PlainStack>;
};
