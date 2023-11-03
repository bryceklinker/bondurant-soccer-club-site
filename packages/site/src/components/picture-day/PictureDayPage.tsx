import React, { FunctionComponent } from 'react';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { Section } from '../../common/components/Section';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { NoPictureDateScheduled } from './NoPictureDateScheduled';

export const PictureDayPage: FunctionComponent = () => {
    return (
        <GappedStack padded>
            <Title>Picture Day</Title>
            <Section padded className={'flex-row'}>
                <ColumnFlex className={'flex-half'}>
                    <NoPictureDateScheduled />
                </ColumnFlex>
            </Section>
        </GappedStack>
    );
};
