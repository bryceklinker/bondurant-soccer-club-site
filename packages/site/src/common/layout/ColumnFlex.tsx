import { FC } from 'react';
import { FlexProps, Flex } from './Flex';
import { ClassNames } from '../extensions/class-names';

export type ColumnFlexProps = FlexProps;

export const ColumnFlex: FC<ColumnFlexProps> = ({ className, ...props }) => {
    const classes = ClassNames.join('flex-col', className);
    return <Flex className={classes} {...props} />;
};
