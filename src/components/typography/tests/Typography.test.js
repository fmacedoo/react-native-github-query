import 'jest-styled-components';
import 'react-native';
import React from 'react';

import Typography from '../';

import { render } from '@reactnativegithubquery/shared/test-utils';

describe('<Typography /> props', () => {
    it('should render a Typography', () => {
        const { queryByTestId } = render(<Typography />);

        expect(queryByTestId('Typography')).toBeDefined();
    });

    it('should render Typography with a text', () => {
        const text = 'Lorem ipsum';
        const { queryByText } = render(<Typography text={text} />);

        const element = queryByText(text);

        expect(element).not.toBeNull();
    });
});
