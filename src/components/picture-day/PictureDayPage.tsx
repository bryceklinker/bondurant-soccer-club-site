import React, { FunctionComponent } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { RowFlex } from '../../common/layout/RowFlex';
import { PlainStack } from '../../common/components/PlainStack';
import { Paragraph } from '../../common/components/Paragraph';
import { Dates } from '../../common/extensions/dates';
import { ExternalLink } from '../../common/components/ExternalLink';
import { Seo } from '../../common/seo/Seo';
import { Section } from '../../common/components/Section';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import {
    usePicturesAccess,
    usePicturesCompanyLink,
    usePicturesDate
} from './hooks';

export const PictureDayPage: FunctionComponent = () => {
    const pictureDate = usePicturesDate();
    const companyLink = usePicturesCompanyLink();
    const pictureAccess = usePicturesAccess();

    return (
        <>
            <Seo
                title={'Picture Day'}
                description={
                    'Learn when picture day is at Bondurant Soccer Club'
                }
                route={'picture-day'}
            />
            <GappedStack padded>
                <Title>Picture Day</Title>
                <Section padded className={'flex-row'}>
                    <ColumnFlex className={'flex-half'}>
                        <StaticImage
                            alt={'picture day schedule'}
                            src={'../../assets/picture_day_schedule.jpg'}
                        />
                    </ColumnFlex>
                    <ColumnFlex>
                        <Paragraph>
                            {Dates.formatLongDate(pictureDate)} is Picture Day!
                        </Paragraph>

                        <Paragraph>
                            <ExternalLink href={companyLink.url}>
                                {companyLink.text}
                            </ExternalLink>{' '}
                            will be hosting the {pictureDate.getFullYear()}{' '}
                            soccer photos.
                        </Paragraph>

                        <Paragraph>
                            Players are required to wear all blue. Blue jersey,
                            blue shorts, and blue socks.
                        </Paragraph>

                        <Paragraph>
                            Parents can text the code {pictureAccess.accessCode}{' '}
                            to the number {pictureAccess.phoneNumber} or
                            handouts will be available on Saturday to order the
                            photos!
                        </Paragraph>
                    </ColumnFlex>
                </Section>
            </GappedStack>
        </>
    );
};
