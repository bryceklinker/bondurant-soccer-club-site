import {FC, PropsWithChildren} from 'react';
import {Separator} from '@fluentui/react';

export const Divider: FC<PropsWithChildren> = ({children}) => {
    return <Separator>{children}</Separator>
}
