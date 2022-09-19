import {FunctionComponent} from 'react';
import {Spinner, SpinnerProps} from '@chakra-ui/react';

export interface LoadingProps extends SpinnerProps {
}

export const Loading: FunctionComponent<LoadingProps> = ({size = 'lg'}) => {
    return <Spinner size={size} />
}
