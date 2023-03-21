import { FC } from 'react';
import { useAuthLogin, useAuthLogout, useAuthUser } from './auth-hooks';
import { GoogleLogin } from '@react-oauth/google';
import { Button } from '../components/Button';
import { AuthUser } from './auth-types';
import { RowFlex } from '../layout/RowFlex';

export const AuthLoginButton: FC = () => {
    const { onSuccess, onError } = useAuthLogin();

    const user = useAuthUser();
    const button = user ? (
        <LogoutButton user={user} />
    ) : (
        <GoogleLogin
            logo_alignment={'center'}
            onSuccess={onSuccess}
            onError={onError}
            shape={'circle'}
            size={'medium'}
            width={'40px'}
            type={'icon'}
        />
    );
    return (
        <RowFlex style={{ width: '64px' }} className={'flex-none'}>
            {button}
        </RowFlex>
    );
};

const LogoutButton: FC<{ user: AuthUser }> = ({ user }) => {
    const logout = useAuthLogout();
    return (
        <Button className={'mb-1'} onClick={logout}>
            <img
                width={32}
                className={'rounded-full'}
                src={user.picture}
                alt={'user profile picture'}
            />
        </Button>
    );
};
