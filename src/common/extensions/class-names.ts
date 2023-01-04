import { Strings } from './strings';

function join(...classNames: Array<string | undefined | null>): string {
    return Strings.join(' ', ...classNames);
}

export const ClassNames = {
    join
};
