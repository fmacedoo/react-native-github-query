import styled from 'styled-components/native';

import { Column, Row } from '@reactnativegithubquery/components/layout';

export const StyledRow = styled(Row)`
    margin: 0 ${({ theme }) => theme.spacers.xs}px;
    margin-top: ${({ theme }) => theme.spacers.s}px;
`;

export const StyledColumn = styled(Column)`
    margin: 0 ${({ theme }) => theme.spacers.xs}px;
    margin-top: ${({ theme }) => theme.spacers.s}px;
`;

export const StyledView = styled.ScrollView`
    flex-grow: 1;
`;

export const StyledBorderedView = styled.View`
    flex-grow: 1;
    padding: ${({ theme, noPadding }) => (!noPadding ? theme.spacers.xs : 0)}px;
    border: 1px solid ${({ theme }) => theme.palette.border};
    border-radius: 6px;
`;
