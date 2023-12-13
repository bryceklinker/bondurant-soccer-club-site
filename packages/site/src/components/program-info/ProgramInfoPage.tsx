import React, { FunctionComponent } from 'react';
import { Program } from './Program';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { usePrograms } from './hooks';
import { U7_U8ProgramInfo } from './U7_U8ProgramInfo';

export const ProgramInfoPage: FunctionComponent = () => {
    const programs = usePrograms().map((p, i) => (
        <Program key={i} program={p} />
    ));
    return (
        <GappedStack padded>
            <Title>Program Info</Title>

            <U7_U8ProgramInfo />
            {programs}
        </GappedStack>
    );
};
