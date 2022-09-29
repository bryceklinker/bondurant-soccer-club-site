import React, { FunctionComponent } from 'react';
import { ExternalLinks } from '../../common/components/ExternalLinks';
import { LinkData } from '../../common/state/models';
import { Section } from '../../common/components/Section';

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
