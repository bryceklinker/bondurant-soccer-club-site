import { ColumnFlexProps } from './ColumnFlex';

export const PADDED_CONTENT_PROPS: ColumnFlexProps = {
    padding: '2em'
};
const SHADOW_BORDER_COLOR = 'rgba(0, 0, 0, 0.3)';
export const SECTION_SHADOW_PROPS: ColumnFlexProps = {
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    borderTopColor: SHADOW_BORDER_COLOR,

    borderLeftStyle: 'solid',
    borderLeftWidth: '1px',
    borderLeftColor: SHADOW_BORDER_COLOR,

    borderRightStyle: 'solid',
    borderRightWidth: '1px',
    borderRightColor: SHADOW_BORDER_COLOR,

    borderRadius: '0.25em',
    boxShadow: '3px 3px 3px dimgray'
};
