import React, { FunctionComponent } from 'react';
import { CurrentNeeds } from './CurrentNeeds';
import { CurrentSponsors } from './CurrentSponsors';
import { useBoardMembersEmailLink } from '../common/hooks/board-members-hooks';
import { useSponsorshipLinks } from '../common/hooks/sponsors-hooks';
import { GappedStack } from '../common/components/GappedStack';
import { Title } from '../common/components/Title';

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
