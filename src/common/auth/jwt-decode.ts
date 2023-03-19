import { Buffer } from 'buffer';
export type JsonWebToken = {
    header: Record<string, string>;
    payload: Record<string, string>;
};

function decode(jwt: string): JsonWebToken | null {
    const parts = jwt.split('.');
    if (parts.length !== 3) {
        return null;
    }

    const header = JSON.parse(
        Buffer.from(parts[0], 'base64').toString('utf-8')
    );
    const payload = JSON.parse(
        Buffer.from(parts[1], 'base64').toString('utf-8')
    );
    return {
        header,
        payload
    };
}

function decodePayload(jwt: string): Record<string, string> | null {
    const decoded = decode(jwt);
    return decoded ? decoded.payload : null;
}

export const Jwt = {
    decode,
    decodePayload
};
