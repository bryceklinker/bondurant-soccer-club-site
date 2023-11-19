import { FC } from 'react';
import { SubTitle } from '../../common/components/SubTitle';

export const NoPictureDateScheduled: FC = () => {
    return (
        <SubTitle aria-label={'no schedule'}>
            Picture day has not been scheduled.
        </SubTitle>
    );
};
