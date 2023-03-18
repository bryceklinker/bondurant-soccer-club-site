import { ResponseComposition, rest, RestContext, RestRequest } from 'msw';
import { setupServer } from 'msw/node';
import { ModelFactory } from './model-factory';

export type SetupRequestOptions = Partial<{
    status: number;
    delay: number;
    captureRest: (req: RestRequest) => Promise<unknown> | unknown;
}>;

const settings = ModelFactory.settings();
const server = setupServer();
function createRestResolver<T = unknown>(
    body: T,
    options?: SetupRequestOptions
) {
    return async (
        req: RestRequest,
        res: ResponseComposition,
        ctx: RestContext
    ) => {
        const transformers = [
            ctx.status(options?.status ?? 200),
            ctx.delay(options?.delay ?? 0)
        ];

        if (options?.captureRest) {
            await options.captureRest(req);
        }

        if (Buffer.isBuffer(body)) {
            transformers.push(ctx.body(body));
        } else if (typeof body === 'object') {
            transformers.push(ctx.json(body));
        }

        return res(...transformers);
    };
}

function setupRestGet<T = unknown>(
    url: string,
    body: T,
    options?: SetupRequestOptions
) {
    server.use(rest.get(url, createRestResolver(body, options)));
}

function setupRestPost<T = unknown>(
    url: string,
    responseBody: T,
    options?: SetupRequestOptions
) {
    server.use(rest.post(url, createRestResolver(responseBody, options)));
}

function setupRestDelete(url: string, options?: SetupRequestOptions) {
    server.use(rest.delete(url, createRestResolver(null, options)));
}

const apiUrl = (path: string) => `${settings.apiUrl}${path}`;

function setupApiGet<T = unknown>(
    path: string,
    body: T,
    options?: SetupRequestOptions
) {
    setupRestGet(apiUrl(path), body, options);
}

function setupApiPost<T = unknown>(
    path: string,
    responseBody: T,
    options?: SetupRequestOptions
) {
    setupRestPost(apiUrl(path), responseBody, options);
}

function setupApiDelete(path: string, options?: SetupRequestOptions) {
    setupRestDelete(apiUrl(path), options);
}

function reset() {
    server.resetHandlers();
    setupRestGet('http://localhost/settings.json', settings);
}
export const FakeServer = {
    listen: () => server.listen(),
    close: () => server.close(),
    reset,
    setupRestDelete,
    setupRestGet,
    setupRestPost,
    setupApiGet,
    setupApiPost,
    setupApiDelete
};
