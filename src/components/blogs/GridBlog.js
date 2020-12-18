import React from 'react'

export const GridBlog = (props) => {
    return (
        <div>
            <div className="blog-card" key={props.index}>
                <div className="card-image">
                    <img src={props.image} alt="" />
                </div>
                <div className="blog-card-details">
                    <h6>Blog</h6>
                    <h5>{props.title}</h5>
                    <p>{props.content}</p>
                    <small>{props.date}</small>
                </div>
            </div>
        </div>
    )
}
