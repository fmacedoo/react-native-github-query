import 'jest-styled-components';
import 'react-native';
import React from 'react';

import Button from '../Button';

import { render, theme } from '@reactnativegithubquery/shared/test-utils';

describe('<Button /> rendering', () => {
    it('Button with default props', () => {
        const { queryByTestId } = render(<Button />);
        expect(queryByTestId('Button')).toBeDefined();
    });

    it('Button with highlight', () => {
        const { getByTestId } = render(<Button highlight />);

        const {
            props: { style: buttonStyles },
        } = getByTestId('Button');

        const {
            props: { style: typographyStyles },
        } = getByTestId('ButtonTypography');

        expect(buttonStyles.backgroundColor).toBe(theme.palette.buttonHighlightBackground);
        expect(typographyStyles.pop().color).toBe(theme.palette.buttonHighlightForeground);
    });
});
