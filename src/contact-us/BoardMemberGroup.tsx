import { FunctionComponent } from 'react';
import { BoardMember } from './BoardMember';
import { BoardMemberData } from '../common/state/models';
import { SectionTitle } from '../common/components/SectionTitle';
import { CollapsiblePanel } from '../common/components/CollapsiblePanel';
import { Section } from '../common/components/Section';

interface BoardMemberGroupProps {
    name: string;
    members: Array<BoardMemberData>;
}

export const BoardMemberGroup: FunctionComponent<BoardMemberGroupProps> = ({
    name,
    members
}) => {
    const items = members.map((m, i) => <BoardMember key={i} member={m} />);
    return (
        <Section shadow padded>
            <CollapsiblePanel title={<SectionTitle>{name}</SectionTitle>}>
                {items}
            </CollapsiblePanel>
        </Section>
    );
};
