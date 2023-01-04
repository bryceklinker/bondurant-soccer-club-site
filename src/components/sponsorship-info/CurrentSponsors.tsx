import React, { FunctionComponent } from 'react';
import { ExternalLinks } from '../../common/components/ExternalLinks';
import { Section } from '../../common/components/Section';
import { LinkData } from '../../common/state/link-data';

export interface CurrentSponsorsProps {
    sponsorLinks: Array<LinkData>;
}

export const CurrentSponsors: FunctionComponent<CurrentSponsorsProps> = ({
    sponsorLinks
}) => {
    return (
        <Section padded shadow>
            <ExternalLinks links={sponsorLinks} />
        </Section>
    );
};
