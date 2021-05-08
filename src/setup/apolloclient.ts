import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const GRAPHQL_URL: string = 'https://api.github.com/graphql';

const httpLink = createHttpLink({
	uri: GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
		},
	};
});

export default new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});
