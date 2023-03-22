import serverless from 'serverless-http';
import { createApiApp } from '../src/createApiApp';
import { setupEnv } from '../src/setup-env';

setupEnv();
const app = createApiApp();
const serverlessHandler = serverless(app, { provider: 'azure' });
export default async (context, req) => {
    context.res = await serverlessHandler(context, req);
};
