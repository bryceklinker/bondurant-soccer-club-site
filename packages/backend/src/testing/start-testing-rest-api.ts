import { Server } from 'http';
import { BackendContext } from '../common/backend-context';
import { createApiApp } from '../createApiApp';
import { createTestingBackendContext } from './create-testing-backend-context';

export type TestingRestApi = {
    server: Server;
    baseUrl: string;
    close: () => Promise<void>;
};

export function startTestingRestApi(
    context?: Partial<BackendContext>
): Promise<TestingRestApi> {
    return new Promise((resolve, reject) => {
        const ctx = createTestingBackendContext(context);
        const app = createApiApp(ctx);
        const server = app.listen(0, () => {
            const address = server.address();
            resolve({
                server,
                baseUrl:
                    typeof address === 'string'
                        ? address
                        : `http://localhost:${address.port}`,
                close: () => {
                    return new Promise((res, rej) => {
                        server.close(err => {
                            if (err) {
                                rej(err);
                            } else {
                                res();
                            }
                        });
                    });
                }
            });
        });
    });
}
