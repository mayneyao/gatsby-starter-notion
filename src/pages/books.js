import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookItem from "../components/bookItem"

const Books = ({ data }) => (
  <Layout>
    <SEO title="My Books" />
    {
      data.allBooks.nodes.map(node => <BookItem data={node} />)
    }
  </Layout>
)

export default Books
export const query = graphql`
  query {
    allBooks(filter: {title: {ne: null}}) {
      nodes {
        cover
        comment
        slug
        title
        posts {
          title
          slug
        }
      }
    }
  }
`
