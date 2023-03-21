import { AriaRole, FC, HTMLAttributes, PropsWithChildren } from 'react';
import { ClassNames } from '../extensions/class-names';

export type FlexProps = HTMLAttributes<HTMLDivElement>;

export const Flex: FC<FlexProps> = ({ className, ...props }) => {
    const classes = ClassNames.join('flex', 'flex-1', className);
    return <div className={classes} {...props} />;
};
