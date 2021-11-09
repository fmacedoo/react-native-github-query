import { node } from 'prop-types';
import { SafeAreaView, StatusBar } from 'react-native';
import React from 'react';

export default function Layout({ children }) {
    return (
        <SafeAreaView>
            <StatusBar />
            {children}
        </SafeAreaView>
    )
}

Layout.propTypes = {
    children: node,
}
