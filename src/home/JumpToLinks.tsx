import {FC, PropsWithChildren} from 'react';
import Link from 'next/link';
import {Button, HStack} from '@chakra-ui/react';
import {RouteNames} from '../common';

export type JumpToButtonProps = PropsWithChildren & {
    to: string;
}

export const JumpToButton: FC<JumpToButtonProps> = ({to, children}) => {
    return (
            <Link href={to}>
                <Button className={`jump-link large-button`} aria-label={'jump link'}>
                    {children}
                </Button>
            </Link>
    );
};

export const JumpToLinks: FC = () => {
    return (
        <HStack className={'jump-link-container'} gap={'1em'}>
            <JumpToButton to={RouteNames.GetInvolved}>
                Get Involved
            </JumpToButton>
            <JumpToButton to={RouteNames.ContactUs}>
                Contact Us
            </JumpToButton>
            <JumpToButton to={RouteNames.Locations}>
                Locations
            </JumpToButton>
            <JumpToButton to={RouteNames.Schedules}>
                Schedules
            </JumpToButton>
        </HStack>
    );
};
