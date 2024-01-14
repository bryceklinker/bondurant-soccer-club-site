import { FC, useMemo } from 'react';
import { Section } from '../../common/components/Section';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Paragraph } from '../../common/components/Paragraph';
import { SubTitle } from '../../common/components/SubTitle';
import { AcademyContact } from './AcademyContact';
import { RouteNames } from '../../common/routing/route-names';
import { BoardMemberRole } from '../../common/state/board-member-role';
import { useAcademyContacts } from './hooks';
import { SmartLinkList } from '../../common/components/SmartLink';
import { LinkData } from '../../common/state/link-data';
import { BoardMemberData } from '../../common/state/board-member-data';

export const AcademyProgramOverview: FC = () => {
    const contacts = useAcademyContacts();
    const contactLinks = useMemo<LinkData[]>(
        () =>
            contacts.map(c => ({
                url: BoardMemberData.getMailToLink([c]),
                text: c.name
            })),
        [contacts]
    );
    return (
        <Section padded shadow>
            <SectionTitle>Overview</SectionTitle>

            <Paragraph className={'p-4'}>
                As part of the Youth Academy Program governed by the Iowa Soccer
                Association, the Bondurant Soccer Club (BSC) Academy Program is
                a developmental program run by professionally educated staff for
                players to develop their technical abilities and tactical
                understanding of the game of soccer. The BSC Academy program
                focuses on entry into competitive soccer for the U9 and U10 age
                groups. Through professional instruction, defined curriculum,
                developmentally appropriate competition, the players will be
                prepared for a future in competitive soccer.
            </Paragraph>

            <SectionTitle>Contacts</SectionTitle>
            <Paragraph className={'p-4'}>
                <SmartLinkList links={contactLinks} />
            </Paragraph>
        </Section>
    );
};
