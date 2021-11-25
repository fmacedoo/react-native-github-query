import 'jest-styled-components';
import 'react-native';
import { Linking } from 'react-native';
import React from 'react';

import Anchor from '../Anchor';

import { fireEvent, render, waitFor } from '@reactnativegithubquery/shared/test-utils';

jest.mock('react-native/Libraries/Linking/Linking', () => ({
    openURL: jest.fn(),
}));

describe('<Anchor /> rendering', () => {
    it('Anchor with tycon', () => {
        const { queryByText } = render(
            <Anchor tycon={{ icon: 'at', text: 'Lorem', color: 'white' }} />,
        );

        expect(queryByText('Lorem')).not.toBeNull();
    });

    it('Anchor with typography', () => {
        const { queryByText } = render(<Anchor typography={{ text: 'Lorem', color: 'white' }} />);

        expect(queryByText('Lorem')).not.toBeNull();
    });

    it('Anchor with tycon & typography must throw', () => {
        // eslint-disable-next-line no-undef
        spyOn(console, 'error');
        expect(() => {
            render(<Anchor tycon={{}} typography={{}} />);
        }).toThrow('Use tycon or typography. Not both!');
    });
});

describe('<Anchor /> interaction', () => {
    it('Anchor with typography', async () => {
        const href = 'http://placeholder.com';
        const { getByTestId } = render(
            <Anchor href={href} typography={{ text: 'Lorem', color: 'white' }} />,
        );

        const anchor = getByTestId('Anchor');

        fireEvent.press(anchor);

        await waitFor(() => expect(Linking.openURL).toHaveBeenCalledWith(href));
    });
});
