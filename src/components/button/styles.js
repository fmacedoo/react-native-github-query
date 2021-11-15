import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity`
    padding: 5px 16px;
    border: 1px solid ${({ theme }) => theme.palette.buttonBorder};
    border-radius: 6px;
    background-color: ${({ theme, highlight }) =>
        highlight ? theme.palette.buttonHighlightBackground : theme.palette.buttonBackground};
`;
