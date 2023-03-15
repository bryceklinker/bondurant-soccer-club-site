import { AriaRole, FC, PropsWithChildren } from 'react';
import { ClassNames } from '../extensions/class-names';

export type FlexProps = PropsWithChildren & {
    role?: AriaRole;
    className?: string;
};

export const Flex: FC<FlexProps> = ({ className, ...props }) => {
    const classes = ClassNames.join('flex', 'flex-1', className);
    return <div className={classes} {...props} />;
};
