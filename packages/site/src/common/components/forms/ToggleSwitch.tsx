import { FC } from 'react';
import { SwitchProps, Switch } from '@headlessui/react';
import { ClassNames } from '../../extensions/class-names';
import {
    BACKGROUND_COLOR_CLASSES,
    Color,
    useBackgroundColorClass
} from '../../hooks/style-hooks';

export type ToggleSwitchProps = SwitchProps<'button'> & {
    onColor?: Color;
    offColor?: Color;
};

export const ToggleSwitch: FC<ToggleSwitchProps> = ({
    onColor,
    offColor,
    className,
    checked,
    ...props
}) => {
    const onBackgroundColor = useBackgroundColorClass(
        onColor,
        BACKGROUND_COLOR_CLASSES.primary
    );
    const offBackgroundColor = useBackgroundColorClass(
        offColor,
        BACKGROUND_COLOR_CLASSES.white
    );
    const classes = ClassNames.join(
        'h-7 w-12 inline-flex relative rounded-full items-center bg-slate-200',
        typeof className === 'string' ? className : ''
    );

    const toggleClasses = ClassNames.join(
        'h-5 w-5 rounded-full transition',
        checked ? 'translate-x-6' : 'translate-x-1',
        checked ? onBackgroundColor : offBackgroundColor
    );
    return (
        <Switch className={classes} checked={checked} {...props}>
            <span className={'sr-only'}>place holder</span>
            <span className={toggleClasses} />
        </Switch>
    );
};
