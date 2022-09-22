import faker from 'faker';
import {
    BoardMemberData,
    BoardMemberRole,
    BoardMemberRoleGroup
} from '../common';

function boardMember(model: Partial<BoardMemberData> = {}): BoardMemberData {
    return {
        roleTitle: faker.name.title(),
        role: faker.random.arrayElement(Object.values(BoardMemberRole)),
        email: faker.internet.email(),
        roleGroup: faker.random.arrayElement(
            Object.values(BoardMemberRoleGroup)
        ),
        name: faker.name.firstName(),
        ...model
    };
}

export const ModelFactory = {
    boardMember
};
