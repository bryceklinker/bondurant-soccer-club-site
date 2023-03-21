import { ButtonHTMLAttributes, FC, ReactElement } from 'react';
import { RowFlex } from '../layout/RowFlex';
import { ClassNames } from '../extensions/class-names';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
    return <button type={'button'} className={className} {...props}></button>;
};

export type StyledButtonProps = ButtonProps & {
    color?: 'blue' | 'none';
};
export const StyledButton: FC<StyledButtonProps> = ({
    color,
    className,
    ...props
}) => {
    const colorClassName =
        color === 'blue' ? 'bg-blue-600 text-white' : 'bg-slate-200';
    const classes = ClassNames.join(
        'rounded p-2 shadow hover:brightness-75',
        colorClassName,
        className
    );
    return <Button className={classes} {...props} />;
};

export type IconButtonProps = StyledButtonProps & {
    icon: ReactElement;
};
export const IconButton: FC<IconButtonProps> = ({
    icon,
    children,
    ...props
}) => {
    return (
        <StyledButton {...props}>
            <RowFlex className={'gap-2'}>
                {icon}
                {children}
            </RowFlex>
        </StyledButton>
    );
};
