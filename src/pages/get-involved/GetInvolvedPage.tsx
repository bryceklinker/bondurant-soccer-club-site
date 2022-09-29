import React, { FunctionComponent } from 'react';
import { GetInvolvedOption } from './GetInvolvedOption';
import { useGetInvolvedOptions } from '../../common/hooks/get-involved-hooks';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { Seo } from '../../common/seo/Seo';

export const GetInvolvedPage: FunctionComponent = () => {
    const getInvolvedOptions = useGetInvolvedOptions();
    const options = getInvolvedOptions.map((o, i) => (
        <GetInvolvedOption key={i} data={o} />
    ));
    return (
        <>
            <Seo
                title={'Get Involved'}
                description={
                    'Learn how to get involved at Bondurant Soccer Club'
                }
                route={'get-involved'}
            />
            <GappedStack padded>
                <Title>Get Involved</Title>

                {options}
            </GappedStack>
        </>
    );
};
