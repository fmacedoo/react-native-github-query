import { StatusBar } from 'react-native';
import { node } from 'prop-types';
import React from 'react';

import { StyledSafeAreaView } from './styles';

export default function Layout({ children }) {
    return (
        <StyledSafeAreaView>
            <StatusBar />
            {children}
        </StyledSafeAreaView>
    );
}

Layout.propTypes = {
    children: node,
};
