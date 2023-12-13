import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { U5_U6Details } from '../u5-u6-info/U5_U6Details';

export const U5U6Schedule: FC = () => {
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>U5/U6 Schedule</SectionTitle>}>
                <U5_U6Details includeDates />
            </CollapsiblePanel>
        </Section>
    );
};
