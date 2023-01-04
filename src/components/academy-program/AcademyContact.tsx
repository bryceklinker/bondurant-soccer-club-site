import { FC } from 'react';
import { ExternalLink } from '../../common/components/ExternalLink';
import { BoardMemberData } from '../../common/state/board-member-data';

export type AcademyContactProps = {
    contact: BoardMemberData;
};
export const AcademyContact: FC<AcademyContactProps> = ({ contact }) => {
    return (
        <li>
            <ExternalLink href={BoardMemberData.getMailToLink([contact])}>
                {contact.name}
            </ExternalLink>
        </li>
    );
};
