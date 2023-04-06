import {FC} from 'react';
import {ColumnFlex} from '../../common/layout/ColumnFlex';
import {SubTitle} from '../../common/components/SubTitle';
import {useSessionPlans} from './hooks';

export const SessionPlans: FC = () => {
    const sessionPlans = useSessionPlans()
        .map(s => <a key={s.id} href={s.publicURL} download>{s.name}</a>);
    return (
        <ColumnFlex className={'gap-4'}>
            <SubTitle>Session Plans</SubTitle>
            {sessionPlans}
        </ColumnFlex>
    );
};
