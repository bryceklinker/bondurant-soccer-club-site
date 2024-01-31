import { FC } from 'react';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import {PaidContractPositions} from './PaidContractPositions';
import {VolunteerPositions} from './VolunteerPositions';

export const VolunteerPage: FC = () => {
    return (
        <GappedStack padded>
            <Title>Volunteer</Title>

            <VolunteerPositions />

            <PaidContractPositions />
        </GappedStack>
    );
};
