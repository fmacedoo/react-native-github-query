import { bool, node, oneOf, string } from 'prop-types';
import React from 'react';

import { ALIGN, TRANSFORMS } from './options';
import VARIANTS from './variants';

export default function Typography({
    text = '',
    variant = 'body',
    color = 'primary',
    align = 'left',
    transform = 'none',
    underline,
    bold,
    dataTest = '',
}) {
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
        testID: `${dataTest}Typography`,
    };

    return <StyledComponent {...props}>{text}</StyledComponent>;
}

Typography.propTypes = {
    text: string,
    variant: oneOf(Object.keys(VARIANTS)),
    color: string,
    align: oneOf(Object.keys(ALIGN)),
    transform: oneOf(Object.keys(TRANSFORMS)),
    underline: bool,
    bold: bool,
    dataTest: string,
    children: node,
};
