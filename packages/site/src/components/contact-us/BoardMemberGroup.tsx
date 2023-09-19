import { FunctionComponent } from 'react';
import { BoardMember } from './BoardMember';
import { SectionTitle } from '../../common/components/SectionTitle';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { Section } from '../../common/components/Section';
import { BoardMemberData } from '../../common/state/board-member-data';

interface BoardMemberGroupProps {
    name: string;
    members: Array<BoardMemberData>;
}

export const BoardMemberGroup: FunctionComponent<BoardMemberGroupProps> = ({
    name,
    members
}) => {
    const items = members.map((m, i) => <BoardMember key={i} member={m} />);
    if (items.length === 0) {
        return null;
    }

    return (
        <Section aria-label={'board member group'} shadow padded>
            <CollapsiblePanel title={<SectionTitle>{name}</SectionTitle>}>
                {items}
            </CollapsiblePanel>
        </Section>
    );
};
