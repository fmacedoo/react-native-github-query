import 'jest-styled-components';
import 'react-native';
import React from 'react';

import Tycon from '../Tycon';

import { render } from '@reactnativegithubquery/shared/test-utils';

describe('<Tycon /> rendering', () => {
    it('Tycon with default props', () => {
        const { queryByTestId } = render(<Tycon icon="at" />);

        expect(queryByTestId('Icon')).toBeDefined();
        expect(queryByTestId('Typography')).toBeDefined();
    });

    it('Tycon with default text', () => {
        const { queryByText } = render(<Tycon icon="at" text="Lorem" />);

        expect(queryByText('Lorem')).not.toBeNull();
    });
});
