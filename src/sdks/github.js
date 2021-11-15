import { GITHUB_PERSONAL_TOKEN } from '@env';
import { Octokit } from '@octokit/rest';

const queryUser = `
  query UserQuery($username: String!) {
    organization(login: $username) {
      login
      email
      location
      avatarUrl
      name
      description
      websiteUrl
      url
      repositories(first: 5) {
        totalCount
        nodes {
          id
          name
          description
          updatedAt
          url
        }
      }
    }
    user(login: $username) {
      login
      email
      location
      company
      avatarUrl
      name
      bio
      websiteUrl
      url
      repositories(orderBy: {field: UPDATED_AT, direction: DESC}, first: 5) {
        totalCount
        nodes {
          id
          name
          description
          updatedAt
          url
        }
      }
    }
  }
`;

export default function github() {
    const octokit = new Octokit({
        auth: GITHUB_PERSONAL_TOKEN,
    });

    return {
        users: {
            by: {
                username: username => ({
                    get: async () => {
                        try {
                            // graph query may always return error as it generates a partial response.
                            // the username must be an user or organization result.
                            await octokit.graphql(queryUser, { username });
                        } catch (error) {
                            const { organization, user } = error.data;
                            return organization || user;
                        }
                    },
                }),
            },
        },
    };
}
