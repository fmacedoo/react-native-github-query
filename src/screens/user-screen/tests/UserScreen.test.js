import 'react-native';
import React from 'react';

import UserScreen from '@reactnativegithubquery/screens/user-screen';

import { render } from '@reactnativegithubquery/shared/test-utils';

describe('<UserScreen /> rendering', () => {
    const user = {
        avatarUrl: 'https://placeholder.com',
        bio: 'dolor sit amet',
        company: 'Acme',
        email: 'user@dispostable.com',
        location: 'Lorem ipsum',
        login: 'user',
        name: 'John Doe',
        repositories: {
            nodes: [
                {
                    description: null,
                    id: '576a6766-3578-4faa-b2d3-93b6a1bef3f8',
                    name: 'repo-1',
                    updatedAt: '2021-11-12T18:27:57Z',
                    url: 'https://github.com/user/repo-1',
                },
                {
                    description: null,
                    id: 'f5c6e67b-1e90-4bab-a1ba-7c5079f57b53',
                    name: 'repo-2',
                    updatedAt: '2021-11-10T18:40:21Z',
                    url: 'https://github.com/user/repo-2',
                },
            ],
            totalCount: 10,
        },
        url: 'https://github.com/user',
        websiteUrl: 'https://user.github.io/repo/',
    };

    it('UserScreen with default props', () => {
        render(<UserScreen route={{ params: { user } }} />);
    });
});
