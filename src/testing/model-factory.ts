import { faker } from '@faker-js/faker';
import { BoardMemberRoleGroup } from '../common/state/board-member-role-group';
import { BoardMemberRole } from '../common/state/board-member-role';
import { BoardMemberData } from '../common/state/board-member-data';
import { AlertModel, AlertSeverity } from '../components/alerts/state/models';
import { SettingsModel } from '../common/settings/settings-model';

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

function alert(model: Partial<AlertModel> = {}): AlertModel {
    return {
        severity: faker.helpers.arrayElement(Object.values(AlertSeverity)),
        text: faker.lorem.sentence(),
        id: faker.datatype.uuid(),
        ...model
    };
}

function settings(model: Partial<SettingsModel> = {}): SettingsModel {
    return {
        apiUrl: faker.internet.url(),
        ...model
    };
}

function many<T>(factory: () => T, count = 3): Array<T> {
    return Array.from({ length: count }).map(factory);
}

export const ModelFactory = {
    boardMember,
    alert,
    settings,
    many
};
