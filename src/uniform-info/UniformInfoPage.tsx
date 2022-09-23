import React, { FunctionComponent } from 'react';
import { GappedStack, Title } from '../common/components';
import {
    useDirectorOfUniformsLink,
    useUniformPurchaseOptions,
    useUniformSizes
} from '../common/hooks';
import { UniformCostsAndSizes } from './UniformCostsAndSizes';
import { UniformImages } from './UniformImages';

export const UniformInfoPage: FunctionComponent = () => {
    const sizes = useUniformSizes();
    const purchaseOptions = useUniformPurchaseOptions();
    const directorLink = useDirectorOfUniformsLink();
    return (
        <GappedStack padded>
            <Title>Uniform Info</Title>

            <UniformCostsAndSizes
                sizes={sizes}
                purchaseOptions={purchaseOptions}
                directorLink={directorLink}
            />
            <UniformImages />
        </GappedStack>
    );
};
