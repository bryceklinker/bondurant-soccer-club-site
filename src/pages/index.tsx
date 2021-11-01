import React from 'react';
import {Divider, Grid, SegmentInline} from 'semantic-ui-react';
import {Headline, ClubValueComponent} from '../common';
import {useSiteState} from '../common/hooks/use-site-state';

import './index.css';
export const Index = () => {
    const {clubValues} = useSiteState();

    const valueItems = clubValues.map(v => (
        <Grid.Column>
            <ClubValueComponent key={v.name} clubValue={v}/>
        </Grid.Column>
    ));
    return (
        <>
            <SegmentInline>
                <Headline/>
            </SegmentInline>
            <Divider />
            <Grid stackable columns={3}>
                {valueItems}
            </Grid>
        </>
    );
};

export default Index;
