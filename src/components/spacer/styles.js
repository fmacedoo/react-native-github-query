import styled from 'styled-components/native';

export const StyledSpacer = styled.View`
    width: ${({ theme, size }) => theme.spacers[size]}px;
    height: ${({ theme, size }) => theme.spacers[size]}px;
`;
