import type {GatsbySSR} from 'gatsby';

const ssr: GatsbySSR = {
    onRenderBody({setHtmlAttributes}) {
        setHtmlAttributes({lang: 'en'});
    }
}

export default ssr;
