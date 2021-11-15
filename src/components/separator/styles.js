import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const StyledView = styled.View`
    width: 100%;
    height: ${StyleSheet.hairlineWidth}px;
    background-color: ${({ theme }) => theme.palette.secondary};
`;
