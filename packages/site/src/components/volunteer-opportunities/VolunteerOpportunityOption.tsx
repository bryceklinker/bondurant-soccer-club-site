import React, { FC, useMemo } from 'react';
import { Paragraph } from '../../common/components/Paragraph';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { SectionTitle } from '../../common/components/SectionTitle';
import { SubTitle } from '../../common/components/SubTitle';
import { Section } from '../../common/components/Section';
import { LinkData } from '../../common/state/link-data';
import { VolunteerOpportunitiesData } from '../../common/state/volunteer-opportunities-data';
import { SmartLink } from '../../common/components/SmartLink';

export interface VolunteerOpportunityLinkProps {
    data: LinkData;
}

export const VolunteerOpportunityLink: FC<VolunteerOpportunityLinkProps> = ({
    data
}) => {
    return (
        <Paragraph>
            <SmartLink link={data} />
        </Paragraph>
    );
};

export interface VolunteerOpportunityOptionProps {
    data: VolunteerOpportunitiesData;
}

export const VolunteerOpportunityOption: FC<
    VolunteerOpportunityOptionProps
> = ({ data }) => {
    const links = useMemo(
        () =>
            (data.links ?? []).map((l, i) => (
                <VolunteerOpportunityLink data={l} key={i} />
            )),
        [data.links]
    );
    const hasLinks = useMemo(() => links.length > 0, [links]);
    return (
        <Section shadow padded>
            <CollapsiblePanel title={<SectionTitle>{data.title}</SectionTitle>}>
                <ColumnFlex className={'gap-4'}>
                    <VolunteerOpportunityDescription data={data} />
                    {hasLinks && <SubTitle>Links</SubTitle>}
                    {links}
                </ColumnFlex>
            </CollapsiblePanel>
        </Section>
    );
};

type VolunteerOpportunityDescriptionProps = {
    data: VolunteerOpportunitiesData;
};
const VolunteerOpportunityDescription: FC<
    VolunteerOpportunityDescriptionProps
> = ({ data }) => {
    if (!data.description) {
        return null;
    }

    if (typeof data.description == 'string') {
        return <Paragraph>{data.description}</Paragraph>;
    }

    return <data.description />;
};
