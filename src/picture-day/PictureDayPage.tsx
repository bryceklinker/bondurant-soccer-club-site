import {FunctionComponent} from 'react';
import {
    Dates, ExternalLink,
    GappedStack,
    Paragraph,
    PlainStack, Section,
    Title,
    usePicturesAccess,
    usePicturesCompanyLink,
    usePicturesDate
} from '../common';
import {Image} from '@chakra-ui/react';
const PictureDaySchedule = require('../assets/picture_day_schedule.jpg');

export const PictureDayPage: FunctionComponent = () => {
    const pictureDate = usePicturesDate();
    const companyLink = usePicturesCompanyLink();
    const pictureAccess = usePicturesAccess();

    return (
        <GappedStack padded>
            <Title>Picture Day</Title>
            <Section padded horizontal>
                <PlainStack className={'flex-half'}>
                    <Image src={PictureDaySchedule} />
                </PlainStack>
                <PlainStack>
                    <Paragraph>
                        {Dates.formatLongDate(pictureDate)} is Picture Day!
                    </Paragraph>

                    <Paragraph>
                        <ExternalLink href={companyLink.url}>{companyLink.text}</ExternalLink> will be hosting
                        the {pictureDate.getFullYear()} soccer photos.
                    </Paragraph>

                    <Paragraph>
                        Players are required to wear all blue. Blue jersey, blue shorts, and blue socks.
                    </Paragraph>

                    <Paragraph>
                        Parents can text the code {pictureAccess.accessCode} to the
                        number {pictureAccess.phoneNumber} or handouts will be available on Saturday to order the
                        photos!
                    </Paragraph>
                </PlainStack>
            </Section>
        </GappedStack>
    );
};
