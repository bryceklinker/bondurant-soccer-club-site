import { ButtonHTMLAttributes, FC } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
};

export const Button: FC<ButtonProps> = ({ ...props }) => {
    return <button type={'button'} {...props}></button>;
};
