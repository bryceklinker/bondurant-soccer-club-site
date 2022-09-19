import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from 'next/document';
import {ColorModeScript} from '@chakra-ui/react';
import {BSC_THEME} from '../common';

export type FluentUIDocumentProps = DocumentInitialProps;
export default class FluentUIDocument extends Document<FluentUIDocumentProps> {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
        } as FluentUIDocumentProps;
    }

    render() {
        return (
            <Html lang={'en'}>
                <Head>
                    <title>Bondurant Soccer Club</title>
                </Head>
                <body>
                <ColorModeScript initialColorMode={BSC_THEME.config.initialColorMode } />
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
