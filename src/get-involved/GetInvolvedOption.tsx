import {FunctionComponent} from 'react';
import {Section, LinkData, Paragraph, SectionTitle, SubTitle, CollapsiblePanel, GetInvolvedData} from '../common';
import {Link as ChakraLink, VStack} from '@chakra-ui/react';
import NextLink from 'next/link';

export interface GetInvolvedLinkProps {
    data: LinkData;
}

export const GetInvolvedLink: FunctionComponent<GetInvolvedLinkProps> = ({data}) => {
    if (data.url.startsWith('http') || data.url.startsWith('mailto')) {
        return (
            <Paragraph>
                <ChakraLink as={'a'}
                              href={data.url}
                              target={'_blank'}>
                    {data.text}
                </ChakraLink>
            </Paragraph>
        );
    }


    return (
        <Paragraph>
            <NextLink href={data.url}>
                {data.text}
            </NextLink>
        </Paragraph>
    );
};

export interface GetInvolvedOptionProps {
    data: GetInvolvedData;
}

export const GetInvolvedOption: FunctionComponent<GetInvolvedOptionProps> = ({data}) => {
    const links = data.links.map((l, i) => <GetInvolvedLink data={l} key={i}/>);
    const description = typeof data.description === 'string'
        ? <Paragraph>{data.description}</Paragraph>
        : <data.description />
    return (
        <Section shadow padded>
            <CollapsiblePanel title={<SectionTitle>{data.title}</SectionTitle>}>
                <VStack>
                    {description}
                    <SubTitle>Links</SubTitle>
                    {links}
                </VStack>
            </CollapsiblePanel>
        </Section>
    );
};
