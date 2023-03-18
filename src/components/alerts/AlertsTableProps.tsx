import { AlertModel } from './state/models';
import { FC, useCallback, useMemo } from 'react';
import { Loading } from '../../common/components/Loading';
import { Button } from '../../common/components/Button';
import PencilIcon from '@heroicons/react/24/solid/PencilIcon';

export type AlertsTableProps = {
    alerts: AlertModel[];
    isLoading: boolean;
    onEdit?: (alert: AlertModel) => void;
};
export const AlertsTable: FC<AlertsTableProps> = ({
    alerts,
    isLoading,
    onEdit
}) => {
    const rows = useMemo(
        () =>
            alerts.map(a => (
                <AlertTableRow key={a.id} alert={a} onEdit={onEdit} />
            )),
        [alerts]
    );
    return (
        <table>
            <thead>
                <tr>
                    <th>Text</th>
                    <th>Severity</th>
                    <th></th>
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
};
export const AlertTableRow: FC<AlertTableRowProps> = ({ alert, onEdit }) => {
    const handleEdit = useCallback(() => {
        if (onEdit) {
            onEdit(alert);
        }
    }, [onEdit, alert]);
    return (
        <tr aria-label={'alert'}>
            <td>{alert.text}</td>
            <td>{alert.severity}</td>
            <td>
                <Button aria-label={'edit alert'} onClick={handleEdit}>
                    <PencilIcon />
                </Button>
            </td>
        </tr>
    );
};
export const AlertTableLoadingRow: FC = () => {
    return (
        <tr>
            <td colSpan={2}>
                <Loading />
            </td>
        </tr>
    );
};
