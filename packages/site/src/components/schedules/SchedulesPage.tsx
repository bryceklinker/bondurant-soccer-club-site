import React, { FunctionComponent } from 'react';
import { U9AndUpSchedules } from './U9AndUpSchedules';
import { U5U6Schedule } from './U5U6Schedule';
import { GappedStack } from '../../common/components/GappedStack';
import {U7_U8Schedule} from './U7_U8Schedule';

export const SchedulesPage: FunctionComponent = () => {
    return (
        <GappedStack padded>
            <U5U6Schedule />
            <U7_U8Schedule />
            <U9AndUpSchedules />
        </GappedStack>
    );
};
