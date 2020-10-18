import React from 'react'
import {graphql} from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Layout from '../Components/Layout'
import Head from '../Components/head'
/*export const query=graphql`
query ($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date

      }
      html
    }
  }  
`*/
export const query=graphql`
  query($slug:String){
    contentfulBlogPost(slug:{eq:$slug}){
      title 
      date(fromNow:true)
      body{
        json
      }
    }
  }
`;

 const Blog = (props) => {
   const options={
    renderNode:{
      "embedded-asset-block":(node)=>{
        const alt=node.data.target.fields.title['en-US']
        const url=node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url}/>
      }
    }
   }
    return (
        <Layout>
          <Head title={props.data.contentfulBlogPost.title}/>
           {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}> 

            </div>*/} 

          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.date}</p>
          {documentToReactComponents(props.data.contentfulBlogPost.body.json,options)}
        </Layout>
    )
}
export default Blog;

