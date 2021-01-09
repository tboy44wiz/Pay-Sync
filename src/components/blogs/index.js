import React,{useEffect} from 'react';
import BlogHeader from './BlogsHeader'
import BlogGrid from './AllBlogs'
import Layout from '../layout/layout'
import AOS from "aos";
import "aos/dist/aos.css";
export default function Index(props) {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 100,
          });
        AOS.refresh();
      }, []);
    return (

        <React.Fragment>
            <Layout >
                <BlogHeader/>
                <div >
 <BlogGrid/>
                </div>
               
            </Layout>
        </React.Fragment>
    )
}
