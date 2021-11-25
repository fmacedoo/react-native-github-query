import { bool, string } from 'prop-types';
import { useTheme } from 'styled-components/native';
import React from 'react';

import { Body } from '@reactnativegithubquery/components/typography';

import { StyledButton } from './styles';

export default function Button({ title, highlight, dataTest = '', ...props }) {
    const theme = useTheme();
    return (
        <StyledButton testID={`${dataTest}Button`} {...props} highlight={highlight}>
            <Body
                dataTest={`${dataTest}Button`}
                bold
                text={title}
                color={
                    highlight
                        ? theme.palette.buttonHighlightForeground
                        : theme.palette.buttonForeground
                }
            />
        </StyledButton>
    );
}

Button.propTypes = {
    title: string,
    highlight: bool,
};
