import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { RefereePositions } from './RefereePositions';
import { DirectorOfAcademyPosition } from './DirectorOfAcademyPosition';
import { ConcessionManagementPosition } from './concessions/ConcessionManagementPosition';
import { Spacer } from '../../common/components/Spacer';

export const PaidContractPositions: FC = () => {
    return (
        <Section shadow padded>
            <CollapsiblePanel
                title={
                    <SectionTitle>
                        Contracted Paid Positions (Referee, Director of
                        Academy,Concession Management)
                    </SectionTitle>
                }>
                <Spacer />
                <RefereePositions />
                <ConcessionManagementPosition />
                <DirectorOfAcademyPosition />
            </CollapsiblePanel>
        </Section>
    );
};
