import {ModelFactory, render, screen, userEvent} from '../../testing';
import {BoardMemberGroup} from './BoardMemberGroup';

describe('BoardMemberGroup', () => {
    test('when multiple members exist then shows each member', async () => {
        const members = ModelFactory.many(ModelFactory.boardMember, 5);
        render(<BoardMemberGroup name={'Officials'} members={members}/>);

        await userEvent.click(screen.getByRole('button'));

        expect(screen.getByLabelText('board member group')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem', {name: 'board member'})).toHaveLength(5);
    });

    test('when members is empty then renders nothing', () => {
        render(<BoardMemberGroup name={'At Large'} members={[]}/>);

        expect(screen.queryByLabelText('board member group')).not.toBeInTheDocument();
    });
});
