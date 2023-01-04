import { FC } from 'react';
import { LinkButton, LinkButtonProps } from './LinkButton';
import { useRegistrationLink } from '../../components/registration-info/hooks';
import { ClassNames } from '../extensions/class-names';

export type RegisterHereButtonProps = Omit<
    LinkButtonProps,
    'external' | 'href' | 'children'
>;

export const RegisterHereButton: FC<RegisterHereButtonProps> = ({
    className
}) => {
    const registrationLink = useRegistrationLink();
    const classes = ClassNames.join(
        'p-4 rounded-3xl text-center bg-blue-700 text-white',
        className
    );
    return (
        <LinkButton external className={classes} href={registrationLink.url}>
            {registrationLink.text}
        </LinkButton>
    );
};
