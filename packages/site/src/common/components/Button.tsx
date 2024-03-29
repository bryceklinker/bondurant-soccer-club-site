import { ButtonHTMLAttributes, FC, ReactElement } from 'react';
import { RowFlex } from '../layout/RowFlex';
import { ClassNames } from '../extensions/class-names';
import { Color, useTextAndBackgroundColorClasses } from '../hooks/style-hooks';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
    return <button type={'button'} className={className} {...props}></button>;
};

export type StyledButtonProps = ButtonProps & {
    color?: Color;
};
export const StyledButton: FC<StyledButtonProps> = ({
    color,
    className,
    ...props
}) => {
    const colorClassName = useTextAndBackgroundColorClasses(color);
    const classes = ClassNames.join(
        'rounded p-2 shadow hover:brightness-75',
        'disabled:opacity-75 disabled:cursor-not-allowed',
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
