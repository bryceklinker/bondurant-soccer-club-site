import {
    BackendContext,
    createDefaultBackendContext
} from './common/backend-context';
import express from 'express';
import bodyParser from 'body-parser';
import { createAlertsRouter } from './alerts/alerts-api';

export function createApiApp(context?: BackendContext) {
    const ctx = context ?? createDefaultBackendContext();
    const app = express();
    app.use(bodyParser.json());
    app.use('/alerts', createAlertsRouter(ctx));
    return app;
}
