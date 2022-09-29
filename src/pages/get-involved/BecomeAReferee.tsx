import React, { FunctionComponent } from 'react';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { Paragraph } from '../../common/components/Paragraph';

export const BecomeAReferee: FunctionComponent = () => {
    return (
        <ColumnFlex>
            <Paragraph>
                If you are interested in being a Ref for the Bondurant Soccer
                Club, please contact our Director of Referees
            </Paragraph>

            <Paragraph>
                In order to become a referee, you must take classes in person
                and online and be at least 13 years old
            </Paragraph>
        </ColumnFlex>
    );
};
