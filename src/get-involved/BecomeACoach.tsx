import { FC } from 'react';
import { ExternalLinks } from '../common/components/ExternalLinks';
import { useCoachingDrills } from '../common/hooks/get-involved-hooks';
import { ColumnFlex } from '../common/layout/ColumnFlex';
import { Paragraph } from '../common/components/Paragraph';
import { SubTitle } from '../common/components/SubTitle';

export const BecomeACoach: FC = () => {
    const drills = useCoachingDrills();
    return (
        <ColumnFlex>
            <Paragraph>
                If you are interested in Coaching or assisting a coach, please
                contact one of our Director of Coaches. We appreciate your
                assistance in getting the kids the coaches we need for the
                teams.
                <br />
                Coaches go through a background check by the Iowa Soccer League
                and are required to take training prior to being able to
                interact with players.
            </Paragraph>

            <Paragraph>
                IMPORTANT: US Soccer developed the Safe Soccer framework within
                which all participants in the soccer community, including
                referees, will play an active role in creating an environment
                free from emotional, physical and sexual abuse. It is a
                comprehensive program of policies / process, screening,
                education / training, reporting, monitoring and enforcement
                designed to help you detect and report abuse, respond to it, and
                prevent future occurrences.
            </Paragraph>

            <Paragraph>
                Required Training:
                <br />
                Concussion Training
                <br />
                SafeSport Training
            </Paragraph>

            <ColumnFlex>
                <SubTitle>Drills</SubTitle>
                <ExternalLinks links={drills} />
            </ColumnFlex>
        </ColumnFlex>
    );
};
