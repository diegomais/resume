import gql from 'graphql-tag'

export const GET_ALL_CONTACTS = gql`
  query {
    allContacts {
      edges {
        node {
          _meta {
            uid
          }
          title
          label
          icon
          social
          footer
          target {
            ... on _ExternalLink {
              url
            }
          }
        }
      }
    }
  }
`
