import 'jest-styled-components';
import 'react-native';
import React from 'react';

import Repo from '../Repo';

import { render } from '@reactnativegithubquery/shared/test-utils';

describe('<Repo /> rendering', () => {
    const props = {
        url: 'http://placeholder.com',
        name: 'Lorem ipsum',
    };

    it('Repo with default props', () => {
        const { queryByTestId } = render(<Repo {...props} />);
        expect(queryByTestId('Repo')).toBeDefined();
    });

    it('Repo with default description', () => {
        const description = 'dolor sit amet';
        const { queryByText } = render(<Repo {...props} description="dolor sit amet" />);
        expect(queryByText(description)).not.toBeNull();
    });

    it('Repo with default updatedAt', () => {
        const updatedAt = '2021-11-15T00:00:00Z';
        const { queryByTestId } = render(<Repo {...props} updatedAt={updatedAt} />);
        expect(queryByTestId('RepoUpdatedAtTypography')).toBeDefined();
    });
});
