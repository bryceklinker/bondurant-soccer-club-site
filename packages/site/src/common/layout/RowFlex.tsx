import { FC } from 'react';
import { Flex, FlexProps } from './Flex';
import { ClassNames } from '../extensions/class-names';

export type RowFlexProps = FlexProps;

export const RowFlex: FC<RowFlexProps> = ({ className, ...props }) => {
    const classes = ClassNames.join('flex-row', className);
    return <Flex className={classes} {...props} />;
};
