import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Paragraph } from '../../common/components/Paragraph';
import { useAcademyPlayerCharacteristics } from './hooks';

export const AcademyProgramWhy: FC = () => {
    const characteristics = useAcademyPlayerCharacteristics();
    const items = characteristics.map(c => (
        <li>
            <Paragraph>{c}</Paragraph>
        </li>
    ));
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={
                    <SectionTitle>
                        Why choose academy vs. recreational?
                    </SectionTitle>
                }>
                <Paragraph>
                    The difference between participating in an academy program or recreational program is the level of investment, commitment and interest that a player and their family has in their soccer development. To help decide what level of play is most appropriate for your child, look at the characteristics of an Academy player:
                </Paragraph>

                <ul className={'list-disc px-8'}>{items}</ul>

                <Paragraph>
                    If your child displays a majority of the characteristics listed, and has a desire to grow in their soccer development,  they are probably more suited to that level of play. However, it should be noted that during a player's soccer development they may move back and forth between academy and recreational play.
                </Paragraph>
            </CollapsiblePanel>
        </Section>
    );
};
