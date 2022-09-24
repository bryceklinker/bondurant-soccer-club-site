import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { isBrowser } from '@chakra-ui/utils';

const useSafeLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export function useMediaQuery(query: string | string[]): boolean[] {
    const queries = Array.isArray(query) ? query : [query];
    const isSupported = isBrowser && 'matchMedia' in window;

    const [matches, setMatches] = useState(
        queries.map(query =>
            isSupported ? window.matchMedia(query).matches : false
        )
    );

    useSafeLayoutEffect(() => {
        if (!isSupported) return undefined;

        const mediaQueryList = queries.map(query => window.matchMedia(query));

        const listenerList = mediaQueryList.map((mediaQuery, index) => {
            const listener = () =>
                setMatches(prev =>
                    prev.map((prevValue, idx) =>
                        index === idx ? mediaQuery.matches : prevValue
                    )
                );

            mediaQuery.addListener(listener);

            return listener;
        });

        return () => {
            mediaQueryList.forEach((mediaQuery, index) => {
                mediaQuery.removeListener(listenerList[index]);
            });
        };
    }, [query]);

    return matches;
}

export const useIsSmallScreen = () => {
    const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
    return isSmallScreen;
};
export const useIsLargeScreen = () => {
    const isSmallScreen = useIsSmallScreen();
    return useMemo(() => !isSmallScreen, [isSmallScreen]);
};
