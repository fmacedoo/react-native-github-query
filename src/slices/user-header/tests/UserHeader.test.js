import 'jest-styled-components';
import 'react-native';
import React from 'react';

import UserHeader from '../UserHeader';

import { render } from '@reactnativegithubquery/shared/test-utils';

describe('<UserHeader /> rendering', () => {
    const props = {
        avatarUrl: 'http://placeholder.com/avatarurl',
        name: 'Lorem ipsum',
        websiteUrl: 'http://placeholder.com/websiteurl',
    };

    it('UserHeader with custom props', () => {
        const { queryByTestId, queryByText } = render(<UserHeader {...props} />);
        expect(queryByText(props.name)).not.toBeNull();
        expect(queryByTestId('Avatar')).toBeDefined();
        expect(queryByTestId('WebsiteUrlAnchor')).toBeDefined();
    });

    it('UserHeader with bio', () => {
        const { queryByText } = render(<UserHeader {...props} bio="dolor sit amet" />);
        expect(queryByText('dolor sit amet')).not.toBeNull();
    });

    it('UserHeader with description', () => {
        const { queryByText } = render(<UserHeader {...props} description="dolor sit amet" />);
        expect(queryByText('dolor sit amet')).not.toBeNull();
    });

    it('UserHeader with no websiteUrl', () => {
        const { queryByTestId } = render(<UserHeader {...props} websiteUrl={undefined} />);
        expect(queryByTestId('WebsiteUrlAnchor')).toBeNull();
    });
});
