import React, { FunctionComponent } from 'react';
import { Paragraph } from '../../../common/components/Paragraph';
import { LinkData } from '../../../common/state/link-data';
import {SmartLink} from '../../../common/components/SmartLink';
import {SubTitle} from '../../../common/components/SubTitle';

export interface ConcessionStandDutyAndSignupProps {
    signupLink: LinkData;
    contactLink: LinkData;
}

export const ConcessionStandDutyAndSignup: FunctionComponent<
    ConcessionStandDutyAndSignupProps
> = ({ signupLink, contactLink }) => {
    return (
        <>
            <SubTitle>
                Concession Stand Duty and Signup
            </SubTitle>
            <Paragraph>
                Click here to schedule your volunteering spot for
                the Fall 2021 Concession Season:{' '}
                <SmartLink link={signupLink} />
            </Paragraph>

            <Paragraph>
                The Concession Stand at the Bondurant Soccer Fields
                is staffed by volunteers and the profits are used to
                support the fields, players, and needs of the club.
                Parents that aren't coaching are expected to help
                out at the concession stand. If you have any
                questions about this, please contact our &nbsp; <SmartLink link={contactLink} />
            </Paragraph>
        </>
    );
};
