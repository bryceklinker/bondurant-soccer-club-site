import {FunctionComponent} from 'react';
import {GappedStack, Title, useBoardMembersEmailLink, useSponsorshipLinks} from '../common';
import {CurrentNeeds} from './CurrentNeeds';
import {CurrentSponsors} from './CurrentSponsors';

export const SponsorshipInfoPage: FunctionComponent = () => {
    const boardMembersEmail = useBoardMembersEmailLink();
    const sponsorLinks = useSponsorshipLinks();
    return (
        <GappedStack padded>
            <Title>Sponsorship Info</Title>
            <CurrentNeeds boardMembersEmailLink={boardMembersEmail} />
            <CurrentSponsors sponsorLinks={sponsorLinks} />
        </GappedStack>
    )
}
