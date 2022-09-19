import {FunctionComponent} from 'react';
import {Link, VStack} from '@chakra-ui/react';
import {BoardMemberData, SubTitle} from '../common';

export interface BoardMemberProps {
    member: BoardMemberData;
}

export const BoardMember: FunctionComponent<BoardMemberProps> = ({member}) => {
    const name = member.email !== ''
        ? <Link href={`mailto:${member.email}`}>{member.name}</Link>
        : member.name;
    return (
        <VStack className={'board-member'} gap={'0.5em'}>
            <SubTitle>
                Name:&nbsp;{name}
            </SubTitle>
            <SubTitle>Role:&nbsp;{member.roleTitle}</SubTitle>
        </VStack>
    );
};
