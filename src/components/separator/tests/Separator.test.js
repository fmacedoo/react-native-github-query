import 'jest-styled-components';
import 'react-native';
import React from 'react';

import Separator from '../Separator';

import { render } from '@reactnativegithubquery/shared/test-utils';

describe('<Separator /> rendering', () => {
    it('Separator with default props', () => {
        const tree = render(<Separator />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
