import { ResponsiveValue } from '@chakra-ui/react';
import * as CSS from 'csstype';
import { useMemo } from 'react';

export function useSmallVisibility(): ResponsiveValue<CSS.Property.Visibility> {
    return useMemo(
        () => ({
            base: 'visible',
            md: 'collapse'
        }),
        []
    );
}

export function useDefaultVisibility(): ResponsiveValue<CSS.Property.Visibility> {
    return useMemo(
        () => ({
            base: 'hidden',
            md: 'visible'
        }),
        []
    );
}
