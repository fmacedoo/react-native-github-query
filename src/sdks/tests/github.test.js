import github from '../github';

const mockgraphql = jest.fn(() => Promise.reject({ data: {} }));

jest.mock('@octokit/rest', () => ({
    Octokit: function () {
        this.graphql = mockgraphql;
    },
}));

describe('SDK - github', () => {
    const api = github();

    it('api.users.by.username().get()', async () => {
        await api.users.by.username('username').get();

        expect(mockgraphql).toBeCalledWith(expect.anything(), { username: 'username' });
    });
});
