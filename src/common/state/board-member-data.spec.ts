import { BoardMemberData } from './models';
import { ModelFactory } from '../../testing';

describe('BoardMemberData', () => {
    test('when board member is missing email then email excluded from mail to', () => {
        const members: Array<BoardMemberData> = [
            ModelFactory.boardMember({ email: '' }),
            ModelFactory.boardMember({ email: 'bob@jim.com' })
        ];

        const mailto = BoardMemberData.getMailToLink(members);
        expect(mailto).toEqual('mailto:bob@jim.com');
    });
});
