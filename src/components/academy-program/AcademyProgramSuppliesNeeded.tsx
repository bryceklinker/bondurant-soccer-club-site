import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { SubTitle } from '../../common/components/SubTitle';
import {
    useAcademyEquipmentItems,
    useAcademyUniformItems
} from '../../common/hooks/academy-program-hooks';
import { Paragraph } from '../../common/components/Paragraph';

export const AcademyProgramSuppliesNeeded: FC = () => {
    const uniformItems = useAcademyUniformItems().map(i => (
        <li>
            <Paragraph>{i}</Paragraph>
        </li>
    ));

    const equipmentItems = useAcademyEquipmentItems().map(i => (
        <li>
            <Paragraph>{i}</Paragraph>
        </li>
    ));
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>Supplies Needed</SectionTitle>}>
                <SubTitle>BSC Academy Uniform Set</SubTitle>
                <ul className={'list-disc px-4'}>{uniformItems}</ul>

                <SubTitle>Other Equipment</SubTitle>
                <ul className={'list-disc px-4'}>{equipmentItems}</ul>
            </CollapsiblePanel>
        </Section>
    );
};
