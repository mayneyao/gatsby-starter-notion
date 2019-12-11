/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)



// 动态的创建文章详情页
// Create article detail pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
        allPosts(filter: {status: {eq: "published"}}) {
            nodes {
              slug
            }
        }
    }
  `)

    result.data.allPosts.nodes.forEach(({ slug }) => {
        createPage({
            path: `posts/${slug}`,
            component: path.resolve(`./src/templates/blogPost.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: slug,
            },
        })
    })
}