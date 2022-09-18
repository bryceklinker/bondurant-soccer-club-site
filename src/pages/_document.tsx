import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from 'next/document';
import {Stylesheet, resetIds} from '@fluentui/react';

const stylesheet = Stylesheet.getInstance();

export type FluentUIDocumentProps = DocumentInitialProps & {
    styleTags: string,
    serializedStylesheet: string
}
export default class FluentUIDocument extends Document<FluentUIDocumentProps> {
    static async getInitialProps(ctx: DocumentContext) {
        resetIds();
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styleTags: stylesheet.getRules(true),
            serializedStylesheet: stylesheet.serialize()
        } as FluentUIDocumentProps;
    }

    render() {
        return (
            <Html>
                <Head>
                    <style type={'text/css'} dangerouslySetInnerHTML={{__html: this.props.styleTags}}/>
                    <script type={'text/javascript'} dangerouslySetInnerHTML={{
                        __html: `
                            window.FabricConfig = window.FabricConfig || {};
                            window.FabricConfig.serializedStylesheet = ${this.props.serializedStylesheet};
                        `
                    }}/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
