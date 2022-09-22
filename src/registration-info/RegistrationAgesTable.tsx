import React, { FunctionComponent } from 'react';
import './RegistrationAgesTable.css';
import { AgeRegistrationData } from '../common';

export interface RegistrationAgesTableProps {
    ages: Array<AgeRegistrationData>;
}

export const RegistrationAgesTable: FunctionComponent<
    RegistrationAgesTableProps
> = ({ ages }) => {
    const rows = ages.map((a, i) => <RegistrationAgeRow key={i} age={a} />);
    return (
        <table className={'table'}>
            <thead>
                <tr>
                    <th align={'left'}>Age Group</th>
                    <th align={'left'}>Birth Years</th>
                    <th align={'left'}>Cost</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
};

export interface RegistrationAgeRowProps {
    age: AgeRegistrationData;
}

export const RegistrationAgeRow: FunctionComponent<RegistrationAgeRowProps> = ({
    age
}) => {
    return (
        <tr>
            <td>{age.ageGroup.name}</td>
            <td>
                {age.minBirthYear}, {age.maxBirthYear}
            </td>
            <td>{age.ageGroup.cost}</td>
        </tr>
    );
};
