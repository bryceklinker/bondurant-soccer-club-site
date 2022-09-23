import React, { FunctionComponent } from 'react';
import {
    useDirectorOfUniformsLink,
    useUniformPurchaseOptions,
    useUniformSizes
} from '../common/hooks/uniforms-hooks';
import { UniformCostsAndSizes } from './UniformCostsAndSizes';
import { UniformImages } from './UniformImages';
import { GappedStack } from '../common/components/GappedStack';
import { Title } from '../common/components/Title';

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
