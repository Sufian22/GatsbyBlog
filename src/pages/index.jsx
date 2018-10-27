import React from 'react'
import Layout from '../components/layout'
import BlogListItem from '../components/BlogListItem'
import { graphql } from 'gatsby'

export const query = graphql`
  query BlogPosts {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date
            path
            description
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const { edges } = props.data.allMarkdownRemark
  return (
    <Layout>
      {edges.map((edge, index) => {
        const { frontmatter } = edge.node
        return (
          <BlogListItem
            timeout={(index + 1) * 1000}
            key={frontmatter.path}
            title={frontmatter.title}
            description={frontmatter.description}
            date={frontmatter.date}
            path={frontmatter.path}
          />
        )
      })}
    </Layout>
  )
}
export default IndexPage
