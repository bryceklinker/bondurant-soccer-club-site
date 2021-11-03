import React, {FunctionComponent} from 'react';
import {Copyright, SocialMediaFooter} from './components';
import {Section} from '../common';

import './ShellFooter.css';

export const ShellFooter: FunctionComponent = () => {
    return (
        <Section className={'shell-footer'}>
            <div>
                <div>
                    <Copyright/>
                </div>

                <div>

                </div>
                <div className={'right-footer'}>
                    <SocialMediaFooter/>
                </div>
            </div>
        </Section>
    );
};
