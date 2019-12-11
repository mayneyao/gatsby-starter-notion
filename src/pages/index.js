import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from "../components/postItem"

const IndexPage = (props) => {
  const { data: { allPosts } } = props
  return (
    <Layout>
      <SEO title="My Posts" />
      {
        allPosts.nodes.map(node => <PostItem data={node} />)
      }
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
  query {
    allPosts(filter: {status: {eq: "published"}}) {
      nodes {
        title
        tags
        status
        slug
        publish_date(fromNow: false)
        books {
          title
          slug
          cover
        }
      }
    }
  }
`