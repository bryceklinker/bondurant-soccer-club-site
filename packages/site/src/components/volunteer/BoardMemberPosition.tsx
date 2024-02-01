import { FC } from 'react';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SubTitle } from '../../common/components/SubTitle';
import { Paragraph } from '../../common/components/Paragraph';
import { SmartLinkList } from '../../common/components/SmartLink';
import { useBoardMemberPositionLinks } from './hooks';
import { Section } from '../../common/components/Section';
import {SectionTitle} from '../../common/components/SectionTitle';

export const BoardMemberPosition: FC = () => {
    const links = useBoardMemberPositionLinks();
    return (
        <Section padded shadow>
            <CollapsiblePanel title={
                <SectionTitle>
                    Become A Board Member - one child registration fee and volunteer fee reimbursed
                </SectionTitle>
            }>
                <Paragraph>
                    Attend monthly meetings, volunteer to help the club succeed,
                    make strategic decisions for the entire Bondurant Soccer Family
                </Paragraph>

                <SubTitle>Links</SubTitle>
                <SmartLinkList links={links} />
            </CollapsiblePanel>
        </Section>

    );
};
