import React, { FunctionComponent } from 'react';
import {
    Divider as ChakraDivider,
    DividerProps as ChakraDividerProps
} from '@chakra-ui/react';

export type DividerProps = ChakraDividerProps;

export const Divider: FunctionComponent<DividerProps> = ({ children }) => {
    return <ChakraDivider>{children}</ChakraDivider>;
};
