import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

export const StyledIcon = styled(Icon)`
    margin-right: ${({ theme }) => theme.spacers.xxxs}px;
    color: ${({ theme, color }) => theme.palette[color]};
`;
