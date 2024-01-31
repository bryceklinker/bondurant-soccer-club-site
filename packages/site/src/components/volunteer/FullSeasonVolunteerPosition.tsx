import { FC } from "react";
import {CollapsiblePanel} from '../../common/components/CollapsiblePanel';
import {SubTitle} from '../../common/components/SubTitle';
import {Paragraph} from '../../common/components/Paragraph';
import {SmartLinkList} from '../../common/components/SmartLink';
import {useFullSeasonVolunteerLinks} from './hooks';

export const FullSeasonVolunteerPosition: FC = () => {
    const links = useFullSeasonVolunteerLinks();
    return (
        <CollapsiblePanel title={<SubTitle>Full Season Volunteer</SubTitle>}>
            <Paragraph>
                Full Season Volunteer - one child's registration fee is reimbursable
            </Paragraph>

            <SubTitle>Links</SubTitle>
            <SmartLinkList links={links} />
        </CollapsiblePanel>
    )
}
