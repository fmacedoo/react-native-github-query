import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import React from 'react';

import { gitHubTheme } from '@reactnativegithubquery/themes';

import ScreensStack from '@reactnativegithubquery/screens/screens-stack';

const App = () => {
    return (
        <ThemeProvider theme={gitHubTheme}>
            <NavigationContainer>
                <ScreensStack />
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
