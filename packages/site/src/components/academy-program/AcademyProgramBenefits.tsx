import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Paragraph } from '../../common/components/Paragraph';

export const AcademyProgramBenefits: FC = () => {
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={
                    <SectionTitle>
                        Benefits of the BSC Academy Program
                    </SectionTitle>
                }>
                <Paragraph>
                    In addition to the above mentioned program benefits, players can expect additional benefits while participating in the BSC Academy Program.  Playing against other club’s Academy League teams, our Academy teams are exposed to a higher level of soccer at a young age to start their development as competitive soccer players.  A set training curriculum will be used by the Academy coaches to ensure a well rounded player. In addition, mixed training groups, small roster sizes, and focused, individual development all benefit the player.  Parent education will extend the player’s opportunity to learn at home as well.
                </Paragraph>
            </CollapsiblePanel>
        </Section>
    );
};
