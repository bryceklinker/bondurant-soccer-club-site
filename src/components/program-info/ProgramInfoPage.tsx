import React, { FunctionComponent } from 'react';
import { Program } from './Program';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { Seo } from '../../common/seo/Seo';
import { usePrograms } from './hooks';

export const ProgramInfoPage: FunctionComponent = () => {
    const programs = usePrograms().map((p, i) => (
        <Program key={i} program={p} />
    ));
    return (
        <>
            <Seo
                title={'Program Info'}
                description={
                    'Learn about the programs offered at Bondurant Soccer Club'
                }
                route={'program-info'}
            />
            <GappedStack padded>
                <Title>Program Info</Title>

                {programs}
            </GappedStack>
        </>
    );
};
