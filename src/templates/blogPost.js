import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const { posts: { title, tags, publish_date, html } } = data
  return (
    <Layout>
      <SEO title={title} />
      <h2>{title}</h2>
      <div>
        <span>pub:</span> <span>{publish_date}</span>
      </div>
      <div>
        <span>tags:</span> {tags && tags.join(',')}
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    posts(slug: { eq: $slug }) {
      html
      title
      tags
      books {
          cover
          slug
          title
      }
      publish_date
    }
  }
`