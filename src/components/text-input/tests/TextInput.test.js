import 'jest-styled-components';
import 'react-native';
import React from 'react';

import TextInput from '../TextInput';

import { render } from '@reactnativegithubquery/shared/test-utils';

describe('<TextInput /> rendering', () => {
    it('TextInput with default props', () => {
        const { queryByTestId } = render(<TextInput />);

        expect(queryByTestId('TextInput')).toBeDefined();
    });

    it('TextInput with textAlign', () => {
        const { getByTestId } = render(<TextInput textAlign="center" />);

        const {
            props: { style },
        } = getByTestId('TextInput');

        expect(style[0].textAlign).toBe('center');
    });
});
