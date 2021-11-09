import { bool, node, oneOf, string } from 'prop-types';
import React from 'react';

import { ALIGN, COLORS, TRANSFORMS } from './options';
import VARIANTS from './variants';

export default function Typography({ text, variant, color, align, transform, underline, bold }) {
    const StyledComponent = VARIANTS[variant];
    if (!StyledComponent) {
        throw new Error(`Typography: Invalid variant "${variant}".`);
    }

    const props = {
        color,
        align,
        transform,
        underline,
        bold,
    };

    return <StyledComponent {...props}>{text}</StyledComponent>;
}

Typography.propTypes = {
    text: string,
    variant: oneOf(Object.keys(VARIANTS)),
    color: oneOf(Object.keys(COLORS)),
    align: oneOf(Object.keys(ALIGN)),
    transform: oneOf(Object.keys(TRANSFORMS)),
    underline: bool,
    bold: bool,
    children: node,
};

Typography.defaultProps = {
    text: '',
    color: 'primary',
    variant: 'body',
    align: 'left',
    transform: 'none',
};
