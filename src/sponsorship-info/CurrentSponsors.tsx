import React, { FunctionComponent } from 'react';
import { Section } from '../common/components';
import { ExternalLinks } from '../common/components/ExternalLinks';
import { LinkData } from '../common/state';

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
