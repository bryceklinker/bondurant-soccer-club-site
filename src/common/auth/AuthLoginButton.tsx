import { FC } from 'react';
import { useAuthLogin, useAuthLogout, useAuthUser } from './auth-hooks';
import { GoogleLogin } from '@react-oauth/google';
import { Button } from '../components/Button';
import { AuthUser } from './auth-types';
import { RowFlex } from '../layout/RowFlex';

export const AuthLoginButton: FC = () => {
    const { onSuccess, onError } = useAuthLogin();

    const user = useAuthUser();
    if (user) {
        return <LogoutButton user={user} />;
    }
    return (
        <div>
            <GoogleLogin
                logo_alignment={'center'}
                width={'64px'}
                onSuccess={onSuccess}
                onError={onError}
                shape={'circle'}
                type={'icon'}
            />
        </div>
    );
};

const LogoutButton: FC<{ user: AuthUser }> = ({ user }) => {
    const logout = useAuthLogout();
    return (
        <Button onClick={logout}>
            <RowFlex className={'flex-none gap-2'}>
                <img
                    height={24}
                    width={24}
                    className={'rounded-full'}
                    src={user.picture}
                    alt={'user profile picture'}
                />
                Logout
            </RowFlex>
        </Button>
    );
};
