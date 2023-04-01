import React from 'react'

const Post = ({ posts }) => {
    return (
        <div className='grid gap-4 xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {
                posts.map((post) => {
                    return (
                        <div className="card w-full shadow-xl" key={post.id}>
                            <div className="card-body">
                                <div className="badge badge-primary left-auto">ID: {post.id}</div>
                                <h2 className="card-title">{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Post