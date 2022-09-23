import React, { FunctionComponent } from 'react';
import { GappedStack, Title } from '../common/components';
import { CurrentNeeds } from './CurrentNeeds';
import { CurrentSponsors } from './CurrentSponsors';
import { useBoardMembersEmailLink, useSponsorshipLinks } from '../common/hooks';

export const SponsorshipInfoPage: FunctionComponent = () => {
    const boardMembersEmail = useBoardMembersEmailLink();
    const sponsorLinks = useSponsorshipLinks();
    return (
        <GappedStack padded>
            <Title>Sponsorship Info</Title>
            <CurrentNeeds boardMembersEmailLink={boardMembersEmail} />
            <CurrentSponsors sponsorLinks={sponsorLinks} />
        </GappedStack>
    );
};
