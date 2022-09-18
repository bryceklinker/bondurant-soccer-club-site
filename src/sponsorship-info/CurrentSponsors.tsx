import {FunctionComponent} from 'react';
import {LinkData, Section} from '../common';
import {ExternalLinks} from '../common/components/ExternalLinks';

export interface CurrentSponsorsProps {
    sponsorLinks: Array<LinkData>;
}

export const CurrentSponsors: FunctionComponent<CurrentSponsorsProps> = ({sponsorLinks}) => {
    return (
        <Section padded shadow>
           <ExternalLinks links={sponsorLinks} />
        </Section>
    )
}
