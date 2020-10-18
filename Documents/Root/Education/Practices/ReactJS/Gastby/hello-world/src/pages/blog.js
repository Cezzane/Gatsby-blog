import React from 'react'
import Layout from '../Components/Layout'
import blogStyles from './blog.module.scss'
import {Link,graphql,useStaticQuery} from 'gatsby'
import Head from '../Components/head'
const Blog = () => {

    //MARKDOWN QUERY
    /*const data=useStaticQuery(graphql`
    query{
        allMarkdownRemark{
            edges{
              node{
                frontmatter{
                  title
                  date
                }
                fields{
                    slug
                }
              }
            }
          }
    }
    `)*/
    const data=useStaticQuery(graphql`
    query{
        allContentfulBlogPost(
          sort:{
            fields:date,
            order:DESC
          }
        ){
          edges{
            node{
              title
              slug
              date(fromNow:true)
            }
          }
        }
      }
    `);

    console.log(data)

    return (
        <div>
            <Layout>
              <Head title='Blog'/>
                <h1>This is the blog page</h1>
                <hr/>
                <div>
                    <ol className={blogStyles.posts}>
                        {
                            data.allContentfulBlogPost.edges.map((edge)=>{
                                return(
                                    
                                    <li className={blogStyles.post} ><Link to={`/blog/${edge.node.slug}`}>
                                        <h2>{edge.node.title}</h2>
                                        <p>{edge.node.date}</p></Link>
                                    </li>
                                    
                                )
                            })
                        }
                    </ol>
                </div>
            </Layout>
        </div>
    )
}

export default Blog;