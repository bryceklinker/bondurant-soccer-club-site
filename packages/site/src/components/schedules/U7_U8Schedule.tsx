import {FC} from 'react';
import {Section} from '../../common/components/Section';
import {CollapsiblePanel} from '../../common/components/CollapsiblePanel';
import {SectionTitle} from '../../common/components/SectionTitle';
import {U7_U8ProgramDetails} from '../program-info/U7_U8ProgramDetails';

export const U7_U8Schedule: FC = () => {
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>U7/U8 Schedule</SectionTitle>}>
                <U7_U8ProgramDetails includeDates />
            </CollapsiblePanel>
        </Section>
    )
}
