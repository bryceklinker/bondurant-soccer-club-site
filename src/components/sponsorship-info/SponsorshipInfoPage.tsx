import React, { FunctionComponent } from 'react';
import { CurrentNeeds } from './CurrentNeeds';
import { CurrentSponsors } from './CurrentSponsors';
import { useBoardMembersEmailLink } from '../../common/hooks/board-members-hooks';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { Seo } from '../../common/seo/Seo';
import { useSponsorshipLinks } from './hooks';

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
