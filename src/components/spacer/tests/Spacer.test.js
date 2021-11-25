import 'jest-styled-components';
import 'react-native';
import React from 'react';

import Spacer from '../Spacer';

import { render, theme } from '@reactnativegithubquery/shared/test-utils';

describe('<Spacer /> rendering', () => {
    it('Spacer with default props', () => {
        const { getByTestId } = render(<Spacer />);

        const {
            props: { style },
        } = getByTestId('Spacer');

        expect(style[0].width).toBe(theme.spacers.m);
        expect(style[0].height).toBe(theme.spacers.m);
    });

    it('Spacer with custom props', () => {
        const { getByTestId } = render(<Spacer size="xl" />);

        const {
            props: { style },
        } = getByTestId('Spacer');

        expect(style[0].width).toBe(theme.spacers.xl);
        expect(style[0].height).toBe(theme.spacers.xl);
    });
});
