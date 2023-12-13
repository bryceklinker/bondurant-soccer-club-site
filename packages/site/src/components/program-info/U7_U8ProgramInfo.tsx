import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { U7_U8ProgramDetails } from './U7_U8ProgramDetails';

export const U7_U8ProgramInfo: FC = () => {
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>U7/U8</SectionTitle>}>
                <U7_U8ProgramDetails />
            </CollapsiblePanel>
        </Section>
    );
};
