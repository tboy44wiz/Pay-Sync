import React,{useEffect} from 'react';

import AOS from "aos";
import "aos/dist/aos.css";
export default function BlogsHeader(props) {
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
        <div className="blogs-header-container">
            <div  className="blogs-header">
                <div  className="welcome-intro">
                    <h4 data-aos="fade-down">Welcome to our blog</h4>
                    <small>Here we'll share informativ guides, inspirational case studies and latest from the PaySync office</small>
                </div>
                <div className="category-btn">
                    <div className="active-cat">All</div>
                    <div>Articles</div>
                    <div>Guides</div>
                    <div>Privacy</div>
                    <div>Case Study</div>
                </div>
            </div>
        </div>
    )
}


