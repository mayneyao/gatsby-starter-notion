import React from "react"
import { Link } from "gatsby";


export default ({ data }) => {
    const { title, tags, publish_date, slug } = data
    return (
        <div style={{ margin: 10 }}>
            <div> <Link to={`posts/${slug}`}>{title}</Link> </div>
            <div>
                <span>pub:</span> <span>{publish_date}</span>
            </div>
            <div>
                <span>tags:</span> {tags && tags.join(',')}
            </div>
        </div>
    )
}