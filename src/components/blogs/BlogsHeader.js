import React from 'react';

const BlogsHeader = () => {
    return (
        <div className="blogs-header-container">
            <div className="blogs-header">
                <div className="welcome-intro">
                    <h4>Welcome to our blog</h4>
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

export default BlogsHeader;
