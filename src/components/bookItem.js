import React from "react"
import { parseImageUrl } from 'notabase/src/utils'
import { Link } from "gatsby";

export default ({ data }) => {
    const { title, cover, comment, posts } = data

    let bookCoverURL = parseImageUrl(cover[0], 150)
    return (
        <div style={{
            display: 'flex',
        }}>
            <img src={bookCoverURL} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{comment}</p>
                {
                    posts && posts.map(post => {
                        const { slug, title } = post
                        return <Link to={`/posts/${slug}`}>{title}</Link>
                    })
                }
            </div>
        </div>
    )
}