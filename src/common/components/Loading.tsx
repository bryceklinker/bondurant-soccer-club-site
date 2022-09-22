import React, { FunctionComponent } from 'react';
import { Spinner, SpinnerSize } from '@fluentui/react';

export interface LoadingProps {
    size?: SpinnerSize;
}

export const Loading: FunctionComponent<LoadingProps> = ({
    size = SpinnerSize.large
}) => {
    return <Spinner size={size} />;
};
