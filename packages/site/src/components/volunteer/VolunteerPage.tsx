import { FC } from 'react';
import { VolunteerOption } from './VolunteerOption';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { useVolunteerOptions } from './hooks';

export const VolunteerPage: FC = () => {
    const volunteerOptions = useVolunteerOptions();
    const options = volunteerOptions.map((o, i) => (
        <VolunteerOption key={i} data={o} />
    ));
    return (
        <GappedStack padded>
            <Title>Volunteer</Title>

            {options}
        </GappedStack>
    );
};
