import { FC, MouseEventHandler, PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren & {
    onClick?: MouseEventHandler;
    className?: string;
};

export const Button: FC<ButtonProps> = ({ ...props }) => {
    return <button type={'button'} {...props}></button>;
};
