import styled from 'styled-components/native';

export const StyledSafeAreaView = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background};
`;
