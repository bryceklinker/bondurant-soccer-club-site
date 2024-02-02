import { FC } from 'react';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SubTitle } from '../../common/components/SubTitle';
import { Paragraph } from '../../common/components/Paragraph';
import { SmartLinkList } from '../../common/components/SmartLink';
import {
    useFullSeasonVolunteerLinks,
    useVolunteerReimbursementText
} from './hooks';
import { Section } from '../../common/components/Section';
import { SectionTitle } from '../../common/components/SectionTitle';

export const FullSeasonVolunteerPosition: FC = () => {
    const links = useFullSeasonVolunteerLinks();
    const reimbursementText = useVolunteerReimbursementText();
    return (
        <Section shadow padded>
            <CollapsiblePanel
                title={
                    <SectionTitle>
                        Full Season Volunteer - one child registration fee and
                        volunteer fee reimbursed
                    </SectionTitle>
                }>
                <Paragraph>{reimbursementText}</Paragraph>

                <SubTitle>Links</SubTitle>
                <SmartLinkList links={links} />
            </CollapsiblePanel>
        </Section>
    );
};
