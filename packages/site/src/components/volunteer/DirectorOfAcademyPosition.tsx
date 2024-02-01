import { FC } from 'react';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SubTitle } from '../../common/components/SubTitle';
import { Paragraph } from '../../common/components/Paragraph';
import { SmartLinkList } from '../../common/components/SmartLink';
import { useDirectorOfAcademyLinks } from './hooks';
import { Section } from '../../common/components/Section';
import { SectionTitle } from '../../common/components/SectionTitle';

export const DirectorOfAcademyPosition: FC = () => {
    const links = useDirectorOfAcademyLinks();
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>Director of Academy</SectionTitle>}>
                <Paragraph>
                    Help cultivate youth players interested in learning and
                    achieving more before transitioning to higher level soccer.
                </Paragraph>

                <SubTitle>Links</SubTitle>
                <SmartLinkList links={links} />
            </CollapsiblePanel>
        </Section>
    );
};
