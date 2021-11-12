import React, {FunctionComponent} from 'react';
import {LinkData} from '../state';
import {ExternalLink} from './ExternalLink';
import {PlainStack} from './PlainStack';

export interface ExternalLinksProps {
    links: Array<LinkData>;
}

export const ExternalLinks: FunctionComponent<ExternalLinksProps> = ({links}) => {
    const items = links.map((l, i) => (
        <ExternalLink className={'padded-bottom'} key={i} href={l.url}>
            {l.text}
        </ExternalLink>
    ));
    return (
        <PlainStack gap={'0.5em'}>
            {items}
        </PlainStack>
    );
};
