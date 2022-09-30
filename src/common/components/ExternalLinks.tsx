import React, { FunctionComponent } from 'react';
import { LinkData } from '../state/models';
import { ExternalLink } from './ExternalLink';
import { PlainStack } from './PlainStack';

export interface ExternalLinksProps {
    links: Array<LinkData>;
}

export const ExternalLinks: FunctionComponent<ExternalLinksProps> = ({
    links
}) => {
    const items = links.map((l, i) => (
        <ExternalLink className={'pb-4'} key={i} href={l.url}>
            {l.text}
        </ExternalLink>
    ));
    return <PlainStack className={'gap-1'}>{items}</PlainStack>;
};
