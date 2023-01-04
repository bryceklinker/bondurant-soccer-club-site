import { faker } from '@faker-js/faker';
import { BoardMemberRoleGroup } from '../common/state/board-member-role-group';
import { BoardMemberRole } from '../common/state/board-member-role';
import { BoardMemberData } from '../common/state/board-member-data';

function boardMember(model: Partial<BoardMemberData> = {}): BoardMemberData {
    return {
        roleTitle: faker.name.jobTitle(),
        role: faker.helpers.arrayElement(Object.values(BoardMemberRole)),
        email: faker.internet.email(),
        roleGroup: faker.helpers.arrayElement(
            Object.values(BoardMemberRoleGroup)
        ),
        name: faker.name.firstName(),
        ...model
    };
}

export const ModelFactory = {
    boardMember
};
