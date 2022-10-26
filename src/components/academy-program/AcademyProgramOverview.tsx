import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Paragraph } from '../../common/components/Paragraph';

export const AcademyProgramOverview: FC = () => {
    return (
        <Section padded shadow>
            <SectionTitle>Overview</SectionTitle>

            <Paragraph className={'p-4'}>
                As part of the Youth Academy Program governed by the Iowa Soccer
                Association, the Bondurant Soccer Club (BSC) Academy Program
                provides a quality environment for players to grow in their
                understanding of the game of soccer. The BSC Academy program
                focuses on beginning the development of competitive soccer
                enthusiasts for the 9U and 10U age groups. Through quality
                instruction, improved methodology, developmentally appropriate
                competition, and effective communication, a solid foundation is
                established for children to continue progressing in the sport.
            </Paragraph>
        </Section>
    );
};
