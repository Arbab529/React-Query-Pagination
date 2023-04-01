import React, { useState } from 'react'
import Post from '../Components/Post'
import Pagination from '../Components/Pagination'
import Loading from '../Components/Loading'
import { useQuery } from 'react-query'
import { getPosts } from '../api/api'

const Posts = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const { data, isLoading, isError, error, isFetching } = useQuery(
        {
            queryKey: ['posts', currentPage],
            queryFn: () => getPosts(currentPage),
            keepPreviousData: true
        }
    )
    const posts = data?.posts;
    if (isLoading) {
        return 'Loading'
    }
    if (isError) return 'Error'

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className='text-3xl font-bold text-center my-5 text-primary'>Pagination - {currentPage}</h1>
            <div className="divider"></div>
            <Post posts={posts} />
            <div className="divider"></div>
            <div className='flex items-center justify-between my-5'>
                <Pagination
                    currentPage={currentPage}
                    totalItems={data?.totalData}
                    onPageChange={(page) => setCurrentPage(page)}
                />
                {isFetching && <Loading />}
            </div>
        </div>
    )
}

export default Posts