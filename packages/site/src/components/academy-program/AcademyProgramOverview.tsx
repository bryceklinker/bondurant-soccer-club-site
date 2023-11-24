import { FC, useMemo } from 'react';
import { Section } from '../../common/components/Section';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Paragraph } from '../../common/components/Paragraph';
import { SubTitle } from '../../common/components/SubTitle';
import { AcademyContact } from './AcademyContact';
import { RouteNames } from '../../common/routing/route-names';
import { BoardMemberRole } from '../../common/state/board-member-role';
import { useAcademyContacts } from './hooks';

export const AcademyProgramOverview: FC = () => {
    const contacts = useAcademyContacts();
    const contactItems = useMemo(
        () => contacts.map(c => <AcademyContact contact={c} />),
        [contacts]
    );
    return (
        <Section padded shadow>
            <SectionTitle>Overview</SectionTitle>

            <Paragraph className={'p-4'}>
                As part of the Youth Academy Program governed by the Iowa Soccer Association, the Bondurant Soccer Club (BSC) Academy Program is a developmental program run by professionally educated staff for players to develop their technical abilities and tactical understanding of the game of soccer. The BSC Academy program focuses on entry into competitive soccer for the U9 and U10 age groups. Through professional instruction, defined curriculum, developmentally appropriate competition, the players will be prepared for a future in competitive soccer.
            </Paragraph>
        </Section>
    );
};
