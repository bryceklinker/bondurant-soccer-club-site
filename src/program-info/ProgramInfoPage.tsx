import React, { FunctionComponent } from 'react';
import { GappedStack, Title } from '../common/components';
import { Program } from './Program';
import { usePrograms } from '../common/hooks';

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
