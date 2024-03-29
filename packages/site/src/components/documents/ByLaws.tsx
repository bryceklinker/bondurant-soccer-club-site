import { FunctionComponent } from 'react';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Paragraph } from '../../common/components/Paragraph';
import { Section } from '../../common/components/Section';
import { SubTitle } from '../../common/components/SubTitle';
import { PlainStack } from '../../common/components/PlainStack';
import { Numbers } from '../../common/extensions/numbers';
import { ByLawSectionData } from '../../common/state/by-law-section-data';
import { ByLawArticleData } from '../../common/state/by-law-article-data';
import { ByLawsData } from '../../common/state/by-laws-data';

export interface ByLawsProps {
    byLaws: ByLawsData;
}

export const ByLaws: FunctionComponent<ByLawsProps> = ({ byLaws }) => {
    const articles = byLaws.articles.map(a => (
        <ByLawArticle key={a.key} article={a} />
    ));
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={
                    <SectionTitle>Bondurant Soccer Club By Laws</SectionTitle>
                }>
                <Paragraph>{byLaws.title}</Paragraph>
                <Paragraph>{byLaws.location}</Paragraph>
                {articles}
                <Paragraph bold>{byLaws.signature}</Paragraph>
                <Paragraph>{byLaws.date}</Paragraph>
            </CollapsiblePanel>
        </Section>
    );
};

export interface ByLawArticleProps {
    article: ByLawArticleData;
}

export const ByLawArticle: FunctionComponent<ByLawArticleProps> = ({
    article
}) => {
    const articleSections = article.sections || [];
    const articleItems = article.items || [];

    const sections = articleSections.map(s => (
        <ByLawSection key={s.key} section={s} />
    ));
    const items = articleItems.map((item, index) => (
        <ByLawItem key={index} index={index} item={item} />
    ));
    return (
        <CollapsiblePanel
            title={
                <SubTitle>
                    Article {article.key}: {article.title}
                </SubTitle>
            }>
            {article.text ? <Paragraph>{article.text}</Paragraph> : null}
            {items.length > 0 ? items : null}
            {sections.length > 0 ? sections : null}
        </CollapsiblePanel>
    );
};

export interface ByLawSectionProps {
    section: ByLawSectionData;
}

export const ByLawSection: FunctionComponent<ByLawSectionProps> = ({
    section
}) => {
    const sectionItems = section.items || [];
    const items = sectionItems.map((item, index) => (
        <ByLawItem key={index} index={index} item={item} />
    ));
    return (
        <PlainStack>
            <PlainStack horizontal>
                <Paragraph bold>Section&nbsp;{section.key}:&nbsp;</Paragraph>
                <Paragraph>{section.title}</Paragraph>
            </PlainStack>
            {section.description ? (
                <PlainStack>
                    <Paragraph>{section.description}</Paragraph>
                </PlainStack>
            ) : null}
            {items.length > 0 ? <PlainStack>{items}</PlainStack> : null}
        </PlainStack>
    );
};

export interface ByLawItemProps {
    index: number;
    item: string;
}

export const ByLawItem: FunctionComponent<ByLawItemProps> = ({
    item,
    index
}) => {
    return (
        <Paragraph>
            {Numbers.asLetter(index + 1)}. {item}
        </Paragraph>
    );
};
