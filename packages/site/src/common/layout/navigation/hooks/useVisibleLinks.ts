import { LinkData } from '../../../state/link-data';
import { useIsLoggedIn } from '../../../auth/auth-hooks';
import { useMemo } from 'react';
import { NavLink } from '../NavLink';
import {
    MAIN_NAVIGATION_LINKS,
    MORE_INFO_NAVIGATION_LINKS
} from '../../../routing/route-names';

export function useVisibleLinks(links: LinkData[]) {
    const isLoggedIn = useIsLoggedIn();
    return useMemo(
        () =>
            links.filter(
                l => !l.requiresUser || (l.requiresUser && isLoggedIn)
            ),
        [isLoggedIn, links]
    );
}

export function useMainNavigationLinks() {
    return useVisibleLinks(MAIN_NAVIGATION_LINKS);
}

export function useMoreNavigationLinks() {
    return useVisibleLinks(MORE_INFO_NAVIGATION_LINKS);
}

export function useAllNavigationLinks() {
    const mainNavLinks = useMainNavigationLinks();
    const moreNavLinks = useMoreNavigationLinks();
    return useMemo(
        () => mainNavLinks.concat(moreNavLinks),
        [mainNavLinks, moreNavLinks]
    );
}
