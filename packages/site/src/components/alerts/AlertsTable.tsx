import { AlertModel } from './state/models';
import { FC, useCallback, useMemo } from 'react';
import { Loading } from '../../common/components/Loading';
import { IconButton } from '../../common/components/Button';
import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid';

export type AlertsTable = {
    alerts: AlertModel[];
    isLoading: boolean;
    onEdit?: (alert: AlertModel) => void;
    onDelete?: (alert: AlertModel) => void;
};
export const AlertsTable: FC<AlertsTable> = ({
    alerts,
    isLoading,
    onEdit,
    onDelete
}) => {
    const rows = useMemo(
        () =>
            alerts.map(a => (
                <AlertTableRow
                    key={a.id}
                    alert={a}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            )),
        [alerts]
    );
    return (
        <table className={'table-auto'}>
            <thead>
                <tr>
                    <th className={'text-left'}>Text</th>
                    <th className={'text-left'}>Severity</th>
                    <th className={'text-left'}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {isLoading && <AlertTableLoadingRow />}
                {!isLoading && rows}
            </tbody>
        </table>
    );
};
export type AlertTableRowProps = {
    alert: AlertModel;
    onEdit?: (alert: AlertModel) => void;
    onDelete?: (alert: AlertModel) => void;
};
export const AlertTableRow: FC<AlertTableRowProps> = ({
    alert,
    onEdit,
    onDelete
}) => {
    const handleEdit = useCallback(() => {
        if (onEdit) {
            onEdit(alert);
        }
    }, [onEdit, alert]);

    const handleDelete = useCallback(() => {
        if (onDelete) {
            onDelete(alert);
        }
    }, [onDelete, alert]);
    return (
        <tr aria-label={'alert'}>
            <td className={'text-left'}>{alert.text}</td>
            <td className={'text-left'}>{alert.severity}</td>
            <td className={'flex justify-start gap-8'}>
                <IconButton
                    className={'p-2 rounded'}
                    aria-label={'edit alert'}
                    icon={<PencilIcon width={'1em'} />}
                    onClick={handleEdit}
                />
                <IconButton
                    className={'p-2 rounded'}
                    aria-label={'delete alert'}
                    icon={<TrashIcon width={'1em'} />}
                    onClick={handleDelete}
                />
            </td>
        </tr>
    );
};
export const AlertTableLoadingRow: FC = () => {
    return (
        <tr>
            <td colSpan={3}>
                <Loading />
            </td>
        </tr>
    );
};
