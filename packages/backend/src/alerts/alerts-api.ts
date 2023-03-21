import { Router } from 'express';
import { BackendContext } from '../common/backend-context';
import { BackendConfig } from '../common/backend-config';

export function createAlertsRouter(context: BackendContext): Router {
    const router = Router();

    async function sendAlertToQueue(alert: Record<string, unknown>) {
        const queueClient = context.queueClient.getQueueClient(
            BackendConfig.alertsQueueName
        );
        await queueClient.sendMessage(JSON.stringify(alert));
    }

    router.post('/', async (req, res) => {
        await sendAlertToQueue(req.body);
        res.status(200).end();
    });

    router.put('/:id', async (req, res) => {
        const alert = { ...req.body, id: req.params.id };
        await sendAlertToQueue(alert);
        res.status(200).end();
    });

    return router;
}
