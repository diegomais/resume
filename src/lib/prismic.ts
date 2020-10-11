import { PrismicLink } from 'apollo-link-prismic'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME
const uri = `https://${REPOSITORY}.prismic.io/graphql`

const client = new ApolloClient({
  link: PrismicLink({ uri }),
  cache: new InMemoryCache()
})

export default client
