import styled from 'styled-components/native';

import GithubOctocat from '@reactnativegithubquery/assets/images/github-octocat.svg';

export const StyledGithubOctocat = styled(GithubOctocat)`
    width: ${({ theme }) => theme.spacers.xl * 4}px;
    height: ${({ theme }) => theme.spacers.xl * 4}px;
`;

export const StyledView = styled.KeyboardAvoidingView`
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    margin: ${({ theme }) => theme.spacers.s}px;
`;
