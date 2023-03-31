import { useMemo } from 'react';
import { ClassNames } from '../extensions/class-names';

export type Color = 'primary' | 'error' | 'default';
export type ColorToClassMap = Record<Color, string>;

export const BACKGROUND_COLOR_CLASSES = {
    white: 'bg-white',
    error: 'bg-red-500',
    primary: 'bg-blue-600',
    default: 'bg-slate-200'
};
const BACKGROUND_COLOR_MAP: ColorToClassMap = {
    default: BACKGROUND_COLOR_CLASSES.default,
    error: BACKGROUND_COLOR_CLASSES.error,
    primary: BACKGROUND_COLOR_CLASSES.primary
};

export const TEXT_COLOR_CLASSES = {
    default: 'text-black',
    error: 'text-black',
    primary: 'text-white'
};
const TEXT_COLOR_MAP: ColorToClassMap = {
    default: TEXT_COLOR_CLASSES.default,
    error: TEXT_COLOR_CLASSES.error,
    primary: TEXT_COLOR_CLASSES.primary
};

export function useBackgroundColorClass(
    color?: Color,
    defaultColor = BACKGROUND_COLOR_MAP.default
) {
    return useMemo(() => {
        return color && color in BACKGROUND_COLOR_MAP
            ? BACKGROUND_COLOR_MAP[color]
            : defaultColor;
    }, [color]);
}

export function useTextColorClass(
    color?: Color,
    defaultColor = TEXT_COLOR_MAP.default
) {
    return useMemo(() => {
        return color && color in TEXT_COLOR_MAP
            ? TEXT_COLOR_MAP[color]
            : defaultColor;
    }, [color]);
}

export function useTextAndBackgroundColorClasses(color?: Color) {
    const backgroundClassName = useBackgroundColorClass(color);
    const textClassName = useTextColorClass(color);
    return useMemo(
        () => ClassNames.join(backgroundClassName, textClassName),
        [backgroundClassName, textClassName]
    );
}
