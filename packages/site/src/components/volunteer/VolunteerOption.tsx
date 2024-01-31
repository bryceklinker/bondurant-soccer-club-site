import React, { FC, useMemo } from 'react';
import { Paragraph } from '../../common/components/Paragraph';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { SectionTitle } from '../../common/components/SectionTitle';
import { SubTitle } from '../../common/components/SubTitle';
import { Section } from '../../common/components/Section';
import { LinkData } from '../../common/state/link-data';
import { VolunteerData } from '../../common/state/volunteer-data';
import { SmartLink } from '../../common/components/SmartLink';

export interface VolunteerLinkProps {
    data: LinkData;
}

export const VolunteerLink: FC<VolunteerLinkProps> = ({
    data
}) => {
    return (
        <Paragraph>
            <SmartLink link={data} />
        </Paragraph>
    );
};

export interface VolunteerOptionProps {
    data: VolunteerData;
}

export const VolunteerOption: FC<
    VolunteerOptionProps
> = ({ data }) => {
    const links = useMemo(
        () =>
            (data.links ?? []).map((l, i) => (
                <VolunteerLink data={l} key={i} />
            )),
        [data.links]
    );
    const hasLinks = useMemo(() => links.length > 0, [links]);
    return (
        <Section shadow padded>
            <CollapsiblePanel title={<SectionTitle>{data.title}</SectionTitle>}>
                <ColumnFlex className={'gap-4'}>
                    <VolunteerDescription data={data} />
                    {hasLinks && <SubTitle>Links</SubTitle>}
                    {links}
                </ColumnFlex>
            </CollapsiblePanel>
        </Section>
    );
};

type VolunteerDescriptionProps = {
    data: VolunteerData;
};
const VolunteerDescription: FC<
    VolunteerDescriptionProps
> = ({ data }) => {
    if (!data.description) {
        return null;
    }

    if (typeof data.description == 'string') {
        return <Paragraph>{data.description}</Paragraph>;
    }

    return <data.description />;
};
