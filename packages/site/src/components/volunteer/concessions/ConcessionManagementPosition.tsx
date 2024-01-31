import {FC} from 'react';
import {CollapsiblePanel} from '../../../common/components/CollapsiblePanel';
import {SubTitle} from '../../../common/components/SubTitle';
import {TreatTickets} from './TreatTickets';
import {useConcessionSignupLink, useConcessionsLocation, useDirectorOfConcessionsMailLink} from './hooks';
import {ConcessionStandDutyAndSignup} from './ConcessionStandDutyAndSignup';

export const ConcessionManagementPosition: FC = () => {
    const concessionLocation = useConcessionsLocation();
    const signupLink = useConcessionSignupLink();
    const contactLink = useDirectorOfConcessionsMailLink();

    return (
        <CollapsiblePanel title={<SubTitle>Concession Management</SubTitle>}>
            <TreatTickets location={concessionLocation} />
            <ConcessionStandDutyAndSignup signupLink={signupLink} contactLink={contactLink} />
        </CollapsiblePanel>
    )
}
