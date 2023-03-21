import { FC } from 'react';
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon';
import { AlertSeverity } from './state/models';

export type AlertIconProps = {
    status: AlertSeverity;
};
export const AlertIcon: FC<AlertIconProps> = ({ status }) => {
    return <ExclamationTriangleIcon />;
};
