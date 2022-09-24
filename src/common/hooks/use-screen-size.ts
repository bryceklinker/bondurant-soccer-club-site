import { useMediaQuery } from '@chakra-ui/react';
import { useMemo } from 'react';

export const useIsSmallScreen = () => {
    const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
    return isSmallScreen;
};
export const useIsLargeScreen = () => {
    const isSmallScreen = useIsSmallScreen();
    return useMemo(() => !isSmallScreen, [isSmallScreen]);
};
