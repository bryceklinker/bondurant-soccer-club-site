import {FC} from 'react';
import {CollapsiblePanel} from '../../common/components/CollapsiblePanel';
import {SubTitle} from '../../common/components/SubTitle';
import {Paragraph} from '../../common/components/Paragraph';
import {SmartLinkList} from '../../common/components/SmartLink';
import {useBoardMemberPositionLinks} from './hooks';

export const BoardMemberPosition: FC = () => {
    const links = useBoardMemberPositionLinks();
    return (
        <CollapsiblePanel title={<SubTitle>Become A Board Member</SubTitle>}>
            <Paragraph>
                Attend monthly meetings, volunteer to help the club succeed, make strategic decisions for the entire Bondurant Soccer Family
            </Paragraph>

            <SubTitle>Links</SubTitle>
            <SmartLinkList links={links} />
        </CollapsiblePanel>
    )
}
