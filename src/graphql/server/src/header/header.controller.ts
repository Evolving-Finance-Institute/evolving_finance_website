import { gql } from 'apollo-server-micro'

export const headerTypeDefs = gql`
  #  Link
  type Link {
    name: String!
    href: String!
    dropdown: [Link]
  }
  #  Header
  type Header {
    id: String!
    headerLogo: String!
    headerNavMenu: [Link!]
    headerBtnA: Link!
    headerBtnB: Link!
  }
  #  Data header
  type DataHeader {
    data: [Header]!
  }

  #  Query
  type Query {
    getHeader: DataHeader
  }
`
