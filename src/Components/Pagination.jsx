import React from 'react'
import { ITEM_PER_PAGE } from '../utils/Constants';

const Pagination = ({ currentPage, onPageChange, totalItems }) => {

    const pageCount = Math.ceil(totalItems / ITEM_PER_PAGE);

    const handlePrevPage = () => onPageChange(currentPage - 1);
    const handleNextPage = () => onPageChange(currentPage + 1);

    return (
        <div className="btn-group" >
            <button className="btn" onClick={handlePrevPage} disabled={currentPage === 1}>«</button>
            <button className="btn btn-active">Page {currentPage}</button>
            <button className="btn" onClick={handleNextPage} disabled={currentPage === pageCount}>»</button>
        </div >
    )
}

export default Pagination