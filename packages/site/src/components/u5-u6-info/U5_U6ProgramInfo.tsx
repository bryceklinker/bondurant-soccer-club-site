import { FC } from 'react';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { U5_U6Details } from './U5_U6Details';

export const U5_U6ProgramInfo: FC = () => {
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>U5/U6 Details</SectionTitle>}>
                <U5_U6Details />
            </CollapsiblePanel>
        </Section>
    );
};
