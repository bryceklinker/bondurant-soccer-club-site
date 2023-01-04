import { FC } from 'react';
import { BoardMemberData } from '../../common/state/models';
import { ExternalLink } from '../../common/components/ExternalLink';

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
