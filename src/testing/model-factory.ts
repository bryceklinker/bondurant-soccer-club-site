import { faker } from '@faker-js/faker';
import {
    BoardMemberData,
    BoardMemberRole,
    BoardMemberRoleGroup
} from '../common/state/models';

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
