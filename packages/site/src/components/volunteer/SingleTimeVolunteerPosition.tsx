import {FC} from 'react';
import {SmartLinkList} from '../../common/components/SmartLink';
import {CollapsiblePanel} from '../../common/components/CollapsiblePanel';
import {useSingleTimeVolunteerLinks} from './hooks';
import {SectionTitle} from '../../common/components/SectionTitle';
import {Section} from '../../common/components/Section';

export const SingleTimeVolunteerPosition: FC = () => {
    const links = useSingleTimeVolunteerLinks();
    return (
        <Section shadow padded>
            <CollapsiblePanel title={<SectionTitle>Single Time Volunteer - volunteer fee is reimbursed</SectionTitle>}>
                <SmartLinkList links={links} />
            </CollapsiblePanel>
        </Section>

    )
}
