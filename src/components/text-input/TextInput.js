import { oneOf, string } from 'prop-types';
import { useTheme } from 'styled-components/native';
import React from 'react';

import { StyledTextInput } from './styles';

export default function TextInput({ dataTest = '', textAlign = 'left', ...props }) {
    const theme = useTheme();
    return (
        <StyledTextInput
            testID={`${dataTest}TextInput`}
            {...props}
            textAlign={textAlign}
            placeholderTextColor={theme.palette.border}
        />
    );
}

TextInput.propTypes = {
    dataTest: string,
    textAlign: oneOf(['left', 'center', 'right']),
};
