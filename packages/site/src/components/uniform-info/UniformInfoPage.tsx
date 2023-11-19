import React, { FunctionComponent } from 'react';
import { UniformCostsAndSizes } from './UniformCostsAndSizes';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import {
    useAcademyUniformImages,
    useDirectorOfUniformsLink, useRecreationUniformImages,
    useUniformPurchaseOptions,
    useUniformSizes
} from './hooks';
import {CollapsiblePanel} from '../../common/components/CollapsiblePanel';
import {SectionTitle} from '../../common/components/SectionTitle';
import {UniformImages} from './UniformImages';

export const UniformInfoPage: FunctionComponent = () => {
    const sizes = useUniformSizes();
    const purchaseOptions = useUniformPurchaseOptions();
    const directorLink = useDirectorOfUniformsLink();
    const recreationImages = useRecreationUniformImages();
    const academyImages = useAcademyUniformImages();

    return (
        <GappedStack padded>
            <Title>Uniform Info</Title>

            <UniformCostsAndSizes
                sizes={sizes}
                purchaseOptions={purchaseOptions}
                directorLink={directorLink}
            />

            <CollapsiblePanel title={<SectionTitle>Recreation Uniforms</SectionTitle>}>
                <UniformImages imageFiles={recreationImages} />
            </CollapsiblePanel>

            <CollapsiblePanel title={<SectionTitle>Academy Uniforms</SectionTitle>}>
                <UniformImages imageFiles={academyImages} />
            </CollapsiblePanel>

        </GappedStack>
    );
};
