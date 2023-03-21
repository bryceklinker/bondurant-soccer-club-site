import { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { RowFlex } from '../RowFlex';

export const SocialMedia: FC = () => {
    return (
        <RowFlex className={'h-8 w-96 items-center justify-end'}>
            <a
                target={'_blank'}
                className={'social-media-button'}
                aria-label={'find us on facebook'}
                href={'https://www.facebook.com/bondurantsoccerclub/'}>
                <StaticImage
                    height={32}
                    src={
                        '../../../assets/facebook/FindUs-FB-RGB-BRC-Site-500.png'
                    }
                    alt={'Facebook logo'}
                />
            </a>
        </RowFlex>
    );
};
