import { Text } from 'react-native';
import styled, { css } from 'styled-components/native';

import { ALIGN, COLORS, TRANSFORMS } from './options';

const themeOrColor = (value, theme) => (COLORS[value] ? COLORS[value](theme.palette) : value);

const propsBasedStyle = ({ color, align, transform, theme, underline }) => css`
    color: ${color && themeOrColor(color, theme)};

    text-align: ${ALIGN[align]};
    text-decoration: ${underline && 'underline'};
    text-transform: ${TRANSFORMS[transform]};
`;

export const bodyStyle = () => css`
    font-size: 15px;
    font-family: 'Roboto-Regular';
`;

const fontStyle = bold => css`
    font-family: ${(!bold && '"Roboto-Regular"') || '"Roboto-Bold"'};
`;

export const displayLarge = styled(Text)`
    font-size: 32px;
    font-family: 'Roboto-Regular';
    line-height: 67px;

    ${props => propsBasedStyle(props)}
`;

export const display = styled(Text)`
    font-size: 20px;
    font-family: 'Roboto-Regular';
    line-height: 32px;

    ${({ bold }) => fontStyle(bold)}
    ${props => propsBasedStyle(props)}
`;

export const heading = styled(Text)`
    font-size: 15px;
    font-family: 'Roboto-Regular';
    line-height: 20px;

    ${({ bold }) => fontStyle(bold)}
    ${props => propsBasedStyle(props)}
`;

export const kicker = styled(Text)`
    font-size: 13px;
    font-family: 'Roboto-Regular';

    ${props => propsBasedStyle(props)}
`;

export const body = styled(Text)`
    ${props => bodyStyle(props)}
    ${({ bold }) => fontStyle(bold)}
    ${props => propsBasedStyle(props)}
`;

export const footnote = styled(Text)`
    font-size: 11px;
    font-family: 'Roboto-Regular';

    ${props => propsBasedStyle(props)}
`;
