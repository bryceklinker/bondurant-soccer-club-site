import { FC } from 'react';
import { SectionTitle } from '../../../common/components/SectionTitle';
import { Paragraph } from '../../../common/components/Paragraph';
import { useBoardMemberEmailsInRole } from '../../../common/hooks/board-members-hooks';
import { BoardMemberRole } from '../../../common/state/board-member-role';

export const QuestionsAndApplication: FC = () => {
    const email = useBoardMemberEmailsInRole(
        BoardMemberRole.DirectorOfAcademyOperations
    );
    return (
        <>
            <SectionTitle className={'py-4'}>
                Questions or To Apply
            </SectionTitle>

            <Paragraph>
                <a href={email}>
                    {BoardMemberRole.DirectorOfAcademyOperations}
                </a>
            </Paragraph>
        </>
    );
};
