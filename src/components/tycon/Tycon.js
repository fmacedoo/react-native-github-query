import { string } from 'prop-types';
import React from 'react';

import { Row } from '@reactnativegithubquery/components/layout';
import Typography from '@reactnativegithubquery/components/typography';

import { StyledIcon } from './styles';

export default function Tycon({
    icon,
    text,
    color = 'primary',
    typography = { variant: 'body' },
    dataTest = '',
}) {
    return (
        <Row>
            <StyledIcon testID={`${dataTest}Icon`} name={icon} color={color} />
            <Typography
                testID={`${dataTest}Typography`}
                text={text}
                color={color}
                {...typography}
            />
        </Row>
    );
}

Tycon.propTypes = {
    icon: string.isRequired,
    text: string,
    color: string,
    dataTest: string,
};
