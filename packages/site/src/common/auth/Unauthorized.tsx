import { FC } from 'react';
import { Section } from '../components/Section';
import { SectionTitle } from '../components/SectionTitle';
import { Paragraph } from '../components/Paragraph';

export const Unauthorized: FC = () => {
    return (
        <Section role={'alert'} aria-label={'unauthorized'}>
            <SectionTitle>Unauthorized</SectionTitle>
            <Paragraph>
                Sorry but you are not authorized to view this page. Please login
                to view this content.
            </Paragraph>
        </Section>
    );
};
