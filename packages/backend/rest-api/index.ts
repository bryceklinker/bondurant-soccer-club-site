import serverless from 'serverless-http';
import { createApiApp } from '../src/createApiApp';

const app = createApiApp();
const handler = serverless(app, { provider: 'azure' });
export default handler;
