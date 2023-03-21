import { FC } from 'react';
import { SectionTitle } from '../../../common/components/SectionTitle';
import { Paragraph } from '../../../common/components/Paragraph';
import { BulletedList } from '../../../common/components/BulletedList';
import { ListItem } from '../../../common/components/ListItem';
import { useBoardMemberEmailsInRole } from '../../../common/hooks/board-members-hooks';
import { BoardMemberRole } from '../../../common/state/board-member-role';

export const SelectionProcess: FC = () => {
    const directorOfOperationsEmail = useBoardMemberEmailsInRole(
        BoardMemberRole.DirectorOfAcademyOperations
    );
    return (
        <>
            <SectionTitle className={'py-4'}>Selection Process</SectionTitle>

            <Paragraph>
                Submit the following to{' '}
                <a href={directorOfOperationsEmail}>
                    {BoardMemberRole.DirectorOfAcademyOperations}
                </a>
            </Paragraph>

            <BulletedList className={'pt-4'}>
                <ListItem>
                    Resume or letter detailing your soccer coaching experience
                    and other relevant information
                </ListItem>
                <ListItem>Two letters of recommendation</ListItem>
                <ListItem>
                    A current coaching license or additional letter detailing
                    your plans to complete license.
                </ListItem>
            </BulletedList>

            <Paragraph className={'pb-4'}>
                Academy Program Committee will review applicant information. You
                will receive notification if you have been selected to move on
                in the process. Candidates being considered for the position
                will then be invited to interview with the selection board.
                Additionally, a demonstration of coaching techniques with a u9
                or u10 team may also be part of the process.
            </Paragraph>

            <Paragraph>
                The Academy Director position will be contracted for one year
                beginning in the fall season of 2023. Academy Director contracts
                will be reviewed by the board on an annual basis.
            </Paragraph>
        </>
    );
};
