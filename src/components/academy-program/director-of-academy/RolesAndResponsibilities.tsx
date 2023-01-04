import { FC } from 'react';
import { SectionTitle } from '../../../common/components/SectionTitle';
import { ListItem } from '../../../common/components/ListItem';
import { BulletedList } from '../../../common/components/BulletedList';

export const RolesAndResponsibilities: FC = () => {
    return (
        <>
            <SectionTitle className={'py-4'}>
                Training Roles & Responsibilities
            </SectionTitle>

            <BulletedList>
                <ListItem title={'Leadership'}>
                    Lead and coordinate program planning for coaches
                </ListItem>
                <ListItem title={'Curriculum Development'}>
                    Create curriculum and lesson plans
                </ListItem>
                <ListItem title={'Session Planning'}>
                    Create training session plans and conduct training sessions
                </ListItem>
                <ListItem title={'Coach Development'}>
                    One meeting/training every other week
                </ListItem>
                <ListItem title={'Parent Education'}>
                    Provide parent email content to Head Coaches
                </ListItem>
                <ListItem title={'Game Day'}>
                    Attend matches for the weekends. Rotate or focus on a
                    struggling team
                </ListItem>
                <ListItem title={'Goalkeeper Development'}>
                    Provide goalie training or coordinate with a skills coach
                </ListItem>
                <ListItem title={'Programming'}>
                    Design and execute a winter program
                </ListItem>
                <ListItem title={'Education'}>
                    Obtain and keep current Level D coach license and SafeSport
                    certification
                </ListItem>
            </BulletedList>
        </>
    );
};
