import { FC } from 'react';
import { SmartLinkList } from '../../common/components/SmartLink';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import {
    useSingleTimeVolunteerLinks,
    useVolunteerReimbursementText
} from './hooks';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Section } from '../../common/components/Section';
import { Paragraph } from '../../common/components/Paragraph';

export const SingleTimeVolunteerPosition: FC = () => {
    const links = useSingleTimeVolunteerLinks();
    const reimbursementText = useVolunteerReimbursementText();
    return (
        <Section shadow padded>
            <CollapsiblePanel
                title={
                    <SectionTitle>
                        Single Time Volunteer - volunteer fee is reimbursed
                    </SectionTitle>
                }>
                <Paragraph>{reimbursementText}</Paragraph>
                <SmartLinkList links={links} />
            </CollapsiblePanel>
        </Section>
    );
};
