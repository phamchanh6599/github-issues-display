import React, {useEffect, useState} from 'react';

import './View.scss';
import Table from './../../core-components/Table/Table'
import Pagination from './../../core-components/Pagination/Pagination'

import * as corePagination from './../../helpers/CoreApi/CorePagination'

function View() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [issuesPerPage] = useState(5);

    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(true);
                const data = await corePagination.fetchList(`https://api.github.com/repos/rails/rails/issues?page=${currentPage}&per_page=5`);
                if (data.length) {
                    console.log("data", data)
                    setList(data)
                }
            } catch(err) {
                console.error("ERR", err)
            } finally {
                setLoading(false);
            }
        }
        fetch()
    }, [currentPage])

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div className="View">
            <Table listIssues={list} loading={loading} currentPage={currentPage} />
            <Pagination 
                paginate={paginate}
                currentPage={currentPage}
                loading={loading}
            />
        </div>
    );
}

export default View;
