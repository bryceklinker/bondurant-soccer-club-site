import { AlertModel } from './state/models';
import { FC, useMemo } from 'react';
import { Loading } from '../../common/components/Loading';

export type AlertsTableProps = {
    alerts: AlertModel[];
    isLoading: boolean;
};
export const AlertsTable: FC<AlertsTableProps> = ({ alerts, isLoading }) => {
    const rows = useMemo(
        () => alerts.map(a => <AlertTableRow key={a.id} alert={a} />),
        [alerts]
    );
    return (
        <table>
            <thead>
                <tr>
                    <th>Text</th>
                    <th>Severity</th>
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
};
export const AlertTableRow: FC<AlertTableRowProps> = ({ alert }) => {
    return (
        <tr aria-label={'alert'}>
            <td>{alert.text}</td>
            <td>{alert.severity}</td>
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
