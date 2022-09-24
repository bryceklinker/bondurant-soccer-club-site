import React, { FunctionComponent } from 'react';
import { Program } from './Program';
import { GappedStack } from '../common/components/GappedStack';
import { Title } from '../common/components/Title';
import { usePrograms } from '../common/hooks/programs-hooks';

export const ProgramInfoPage: FunctionComponent = () => {
    const programs = usePrograms().map((p, i) => (
        <Program key={i} program={p} />
    ));
    return (
        <GappedStack padded>
            <Title>Program Info</Title>

            {programs}
        </GappedStack>
    );
};
