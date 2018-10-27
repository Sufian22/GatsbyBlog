import React from "react";
import { graphql } from 'gatsby'
import BlogEntry from "../components/BlogEntry";
import Layout from "../components/layout";

export default function Template(props) {
  console.log(props)
  const {frontmatter, html} = props.data.markdownRemark
  return (
    <Layout>
      <BlogEntry title={frontmatter.title} content={html} date={frontmatter.date} />
    </Layout>
  );
}

export const query = graphql`
  query BlogPostByPath($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
        html
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
        }
    }
  }
`
