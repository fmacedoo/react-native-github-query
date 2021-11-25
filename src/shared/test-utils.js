import { ThemeProvider } from 'styled-components/native';
import { render } from '@testing-library/react-native';
import React from 'react';

import { gitHubTheme as theme } from '@reactnativegithubquery/themes';

const AllTheProviders = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render, theme };
