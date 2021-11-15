import styled from 'styled-components/native';

export const StyledImage = styled.Image`
    width: ${({ theme }) => theme.spacers.xl * 2}px;
    height: ${({ theme }) => theme.spacers.xl * 2}px;
    margin-right: ${({ theme }) => theme.spacers.s}px;
    border-radius: 6px;
`;
