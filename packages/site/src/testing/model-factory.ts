import { faker } from '@faker-js/faker';
import { BoardMemberRoleGroup } from '../common/state/board-member-role-group';
import { BoardMemberRole } from '../common/state/board-member-role';
import { BoardMemberData } from '../common/state/board-member-data';
import { AlertModel, AlertSeverity } from '../components/alerts/state/models';
import { SettingsModel } from '../common/settings/settings-model';
import { AuthUser } from '../common/auth/auth-types';
import { CredentialResponse } from '@react-oauth/google';
import { SiteMetadata } from '../common/hooks/useSiteMetadata';

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
        startDate: faker.date.recent().toISOString(),
        ...model
    };
}

function settings(model: Partial<SettingsModel> = {}): SettingsModel {
    return {
        apiUrl: faker.internet.url(),
        ...model
    };
}

function user(user: Partial<AuthUser> = {}): AuthUser {
    return {
        email: faker.internet.email(),
        name: faker.name.fullName(),
        exp: faker.date.soon(2).getTime() / 1000,
        family_name: faker.name.lastName(),
        iat: faker.date.recent(1).getTime() / 1000,
        given_name: faker.name.firstName(),
        sub: faker.datatype.uuid(),
        picture: faker.internet.url(),
        hd: faker.internet.domainName(),
        ...user
    };
}

function jwtForUser(user: Partial<AuthUser> = {}): string {
    const header = {
        alg: 'RS256',
        kid: faker.datatype.uuid().replaceAll('-', ''),
        typ: 'JWT'
    };
    const payload = ModelFactory.user(user);
    const headerBase64 = Buffer.from(JSON.stringify(header)).toString('base64');
    const payloadBase64 = Buffer.from(JSON.stringify(payload)).toString(
        'base64'
    );
    return `${headerBase64}.${payloadBase64}.`;
}

function credentialsForUser(user: Partial<AuthUser> = {}): CredentialResponse {
    return {
        credential: ModelFactory.jwtForUser(user),
        select_by: 'auto',
        clientId: faker.datatype.uuid()
    };
}

function siteMetadata(metadata: Partial<SiteMetadata> = {}): SiteMetadata {
    return {
        title: faker.word.noun(),
        clientId: faker.datatype.uuid(),
        siteUrl: faker.internet.url(),
        author: faker.name.fullName(),
        description: faker.lorem.sentence(),
        ...metadata
    };
}

function many<T>(factory: () => T, count = 3): Array<T> {
    return Array.from({ length: count }).map(factory);
}

export const ModelFactory = {
    boardMember,
    alert,
    settings,
    user,
    credentialsForUser,
    jwtForUser,
    siteMetadata,
    many
};
