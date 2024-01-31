import { FC } from "react";
import {CollapsiblePanel} from '../../common/components/CollapsiblePanel';
import {SubTitle} from '../../common/components/SubTitle';
import {Paragraph} from '../../common/components/Paragraph';
import {SmartLinkList} from '../../common/components/SmartLink';
import {useDirectorOfAcademyLinks} from './hooks';

export const DirectorOfAcademyPosition: FC = () => {
    const links = useDirectorOfAcademyLinks();
    return (
        <CollapsiblePanel title={<SubTitle>Director of Academy</SubTitle>}>
            <Paragraph>
                Help cultivate youth players interested in learning and achieving more before transitioning to higher level soccer.
            </Paragraph>

            <SubTitle>Links</SubTitle>
            <SmartLinkList links={links} />
        </CollapsiblePanel>
    )
}
