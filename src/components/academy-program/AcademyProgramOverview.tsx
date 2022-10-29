import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Paragraph } from '../../common/components/Paragraph';
import { SubTitle } from '../../common/components/SubTitle';
import { useBoardMembersInRole } from '../../common/hooks/board-members-hooks';
import { BoardMemberRole } from '../../common/state/models';
import { ExternalLink } from '../../common/components/ExternalLink';

export const AcademyProgramOverview: FC = () => {
    const contacts = useBoardMembersInRole(
        BoardMemberRole.DirectorOfAcademyOperations
    ).map(c => (
        <li>
            <ExternalLink href={`mailto:${c.email}`}>{c.name}</ExternalLink>
        </li>
    ));
    return (
        <Section padded shadow>
            <SectionTitle>Overview</SectionTitle>

            <Paragraph className={'p-4'}>
                As part of the Youth Academy Program governed by the Iowa Soccer
                Association, the Bondurant Soccer Club (BSC) Academy Program
                provides a quality environment for players to grow in their
                understanding of the game of soccer. The BSC Academy program
                focuses on beginning the development of competitive soccer
                enthusiasts for the U9 and U10 age groups. Through quality
                instruction, improved methodology, developmentally appropriate
                competition, and effective communication, a solid foundation is
                established for children to continue progressing in the sport.
            </Paragraph>

            <SubTitle>Pricing</SubTitle>
            <Paragraph>Academy Program: $225 per season</Paragraph>

            <SubTitle className={'pt-4'}>Scholarships</SubTitle>
            <Paragraph>
                Scholarships are available for those that need them.
            </Paragraph>

            <SubTitle className={'pt-4'}>Contacts</SubTitle>
            <ul className={'list-none px-4'}>{contacts}</ul>
        </Section>
    );
};
