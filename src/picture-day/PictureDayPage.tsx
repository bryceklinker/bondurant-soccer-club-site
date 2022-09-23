import React, { FunctionComponent } from 'react';
import {
    ExternalLink,
    GappedStack,
    Paragraph,
    PlainStack,
    Title
} from '../common/components';
import { StaticImage } from 'gatsby-plugin-image';
import { RowFlex } from '../common/layout';
import {
    usePicturesAccess,
    usePicturesCompanyLink,
    usePicturesDate
} from '../common/hooks';
import { Dates } from '../common/extensions';

export const PictureDayPage: FunctionComponent = () => {
    const pictureDate = usePicturesDate();
    const companyLink = usePicturesCompanyLink();
    const pictureAccess = usePicturesAccess();

    return (
        <GappedStack padded>
            <Title>Picture Day</Title>
            <RowFlex>
                <PlainStack className={'flex-half'}>
                    <StaticImage
                        alt={'picture day schedule'}
                        src={'../assets/picture_day_schedule.jpg'}
                    />
                </PlainStack>
                <PlainStack>
                    <Paragraph>
                        {Dates.formatLongDate(pictureDate)} is Picture Day!
                    </Paragraph>

                    <Paragraph>
                        <ExternalLink href={companyLink.url}>
                            {companyLink.text}
                        </ExternalLink>{' '}
                        will be hosting the {pictureDate.getFullYear()} soccer
                        photos.
                    </Paragraph>

                    <Paragraph>
                        Players are required to wear all blue. Blue jersey, blue
                        shorts, and blue socks.
                    </Paragraph>

                    <Paragraph>
                        Parents can text the code {pictureAccess.accessCode} to
                        the number {pictureAccess.phoneNumber} or handouts will
                        be available on Saturday to order the photos!
                    </Paragraph>
                </PlainStack>
            </RowFlex>
        </GappedStack>
    );
};
