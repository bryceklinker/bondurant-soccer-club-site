import {useCallback, useState} from 'react';

export function useBooleanToggle(initialValue: boolean = false) {
    const [value, setValue] = useState(initialValue);
    const toggle = useCallback(() => setValue(!value), [value, setValue]);
    const toggleOn = useCallback(() => setValue(true), [setValue]);
    const toggleOff = useCallback(() => setValue(false), [setValue]);
    return {
        value, toggle, toggleOn, toggleOff
    };
}
