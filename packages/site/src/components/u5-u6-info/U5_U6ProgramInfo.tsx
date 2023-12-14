import { FC } from 'react';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { U5_U6Details } from './U5_U6Details';
import {Program} from '../program-info/Program';
import {U5U6ProgramInfo} from './state';

export const U5_U6ProgramInfo: FC = () => {
    return (
        <Program program={U5U6ProgramInfo} />
    );
};
