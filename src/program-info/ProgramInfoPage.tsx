import React, { FunctionComponent } from 'react';
import { GappedStack, Title, usePrograms } from '../common';
import { Program } from './Program';

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
