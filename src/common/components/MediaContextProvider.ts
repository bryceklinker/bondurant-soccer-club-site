import {createMedia} from '@artsy/fresnel';

export const {MediaContextProvider, Media, createMediaStyle} = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024
    }
})
