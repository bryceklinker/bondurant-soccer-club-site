import {FunctionComponent} from 'react';
import {GappedStack, Title, useDirectorOfUniformsLink, useUniformPurchaseOptions, useUniformSizes} from '../common';
import {UniformCostsAndSizes} from './UniformCostsAndSizes';
import {UniformImages} from './UniformImages';

export const UniformInfoPage: FunctionComponent = () => {
    const sizes = useUniformSizes();
    const purchaseOptions = useUniformPurchaseOptions();
    const directorLink = useDirectorOfUniformsLink();
    return (
        <GappedStack padded>
            <Title>Uniform Info</Title>

            <UniformCostsAndSizes sizes={sizes}
                                  purchaseOptions={purchaseOptions}
                                  directorLink={directorLink} />
            <UniformImages />
        </GappedStack>
    )
}
