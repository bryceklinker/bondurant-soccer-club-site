import { FC, PropsWithChildren } from 'react';
import { ClassNames } from '../extensions/class-names';

export type BulletedListProps = PropsWithChildren & {
    className?: string;
};

export const BulletedList: FC<BulletedListProps> = ({
    children,
    className
}) => {
    const classes = ClassNames.join('list-disc pb-4 pl-8', className);
    return <ul className={classes}>{children}</ul>;
};
