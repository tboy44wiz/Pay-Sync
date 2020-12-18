import React from 'react';
import BlogHeader from './BlogsHeader'
import BlogGrid from './AllBlogs'
import Layout from '../layout/layout'
export default function Index(props) {
    return (
        <React.Fragment>
            <Layout >
                <BlogHeader/>
                <BlogGrid/>
            </Layout>
        </React.Fragment>
    )
}
