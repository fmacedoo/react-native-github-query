import 'react-native';
import { Alert, Text as MockText } from 'react-native';
import React from 'react';
import api from '@reactnativegithubquery/sdks';

import SearchScreen from '@reactnativegithubquery/screens/search-screen';

import { fireEvent, render, waitFor } from '@reactnativegithubquery/shared/test-utils';

jest.mock('@reactnativegithubquery/assets/images/github-octocat.svg', () => () => (
    <MockText>Octocat SVG</MockText>
));

jest.mock('@reactnativegithubquery/sdks', () => ({
    github: {
        users: {
            by: {
                username: jest.fn(),
            },
        },
    },
}));

jest.spyOn(Alert, 'alert');

const navigation = {
    navigate: jest.fn(),
};

describe('<SearchScreen /> rendering', () => {
    it('SearchScreen with default props', () => {
        render(<SearchScreen />);
    });
});

describe('<SearchScreen /> iteraction', () => {
    it('SearchScreen must request an user and navigate to UserScreen', async () => {
        const user = { name: 'user' };
        const mockGet = jest.fn(() => user);
        api.github.users.by.username.mockImplementation(() => ({
            get: mockGet,
        }));

        const { getByTestId } = render(<SearchScreen navigation={navigation} />);

        const textInput = getByTestId('UsernameTextInput');
        fireEvent.changeText(textInput, 'username');

        const button = getByTestId('SearchButton');

        fireEvent.press(button);

        await waitFor(() => {
            expect(api.github.users.by.username).toBeCalledWith('username');
            expect(mockGet).toBeCalled();
            expect(navigation.navigate).toBeCalledWith('User', { user });
        });
    });

    it('SearchScreen must handle a 404 error when performing the search', async () => {
        const mockGet = jest.fn(() => Promise.reject({ status: 404 }));
        api.github.users.by.username.mockImplementation(() => ({
            get: mockGet,
        }));

        const { getByTestId } = render(<SearchScreen navigation={navigation} />);

        const textInput = getByTestId('UsernameTextInput');
        fireEvent.changeText(textInput, 'username');

        const button = getByTestId('SearchButton');

        fireEvent.press(button);

        await waitFor(() => {
            expect(Alert.alert).toHaveBeenCalledWith(
                'User not found!',
                'No users were found.',
                expect.anything(),
            );
        });
    });

    it('SearchScreen must handle an unkown error when performing the search', async () => {
        const mockGet = jest.fn(() => Promise.reject({}));
        api.github.users.by.username.mockImplementation(() => ({
            get: mockGet,
        }));

        const { getByTestId } = render(<SearchScreen navigation={navigation} />);

        const textInput = getByTestId('UsernameTextInput');
        fireEvent.changeText(textInput, 'username');

        const button = getByTestId('SearchButton');

        fireEvent.press(button);

        await waitFor(() => {
            expect(Alert.alert).toHaveBeenCalledWith(
                'Ops!',
                'I did it again!\nUnkown error!',
                expect.anything(),
            );
        });
    });
});
