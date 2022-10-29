import { FC } from 'react';
import { LinkButton, LinkButtonProps } from './LinkButton';
import { useRegistrationLink } from '../../components/registration-info/hooks';

export type RegisterHereButtonProps = Omit<
    LinkButtonProps,
    'external' | 'href' | 'children'
>;

export const RegisterHereButton: FC<RegisterHereButtonProps> = ({
    className,
    ...props
}) => {
    const registrationLink = useRegistrationLink();

    return (
        <LinkButton
            external
            className={`p-4 rounded-3xl text-center bg-blue-700 text-white ${className}`}
            href={registrationLink.url}>
            {registrationLink.text}
        </LinkButton>
    );
};
