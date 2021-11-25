import styled from 'styled-components/native';

import { BodyStyle } from '@reactnativegithubquery/components/typography';

export const StyledTextInput = styled.TextInput`
    width: 100%;
    padding: 5px 12px;
    border: 1px solid ${({ theme }) => theme.palette.border};
    border-radius: 6px;
    background-color: ${({ theme }) => theme.palette.inputBackground};
    color: ${({ theme }) => theme.palette.inputForeground};
    text-align: ${({ textAlign }) => textAlign};

    ${BodyStyle()}
`;
