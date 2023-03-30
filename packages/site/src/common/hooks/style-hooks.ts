import { useMemo } from 'react';
import { ClassNames } from '../extensions/class-names';

export type Color = 'primary' | 'error' | 'default';
export type ColorToClassMap = Record<Color, string>;
const BACKGROUND_COLOR_MAP: ColorToClassMap = {
    default: 'bg-slate-200',
    error: 'bg-red-500',
    primary: 'bg-blue-600'
};
const TEXT_COLOR_MAP: ColorToClassMap = {
    default: 'text-black',
    error: 'text-black',
    primary: 'text-white'
};

export function useBackgroundColorClass(color?: Color) {
    return useMemo(() => {
        return color && color in BACKGROUND_COLOR_MAP
            ? BACKGROUND_COLOR_MAP[color]
            : BACKGROUND_COLOR_MAP.default;
    }, [color]);
}

export function useTextColorClass(color?: Color) {
    return useMemo(() => {
        return color && color in TEXT_COLOR_MAP
            ? TEXT_COLOR_MAP[color]
            : TEXT_COLOR_MAP.default;
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
