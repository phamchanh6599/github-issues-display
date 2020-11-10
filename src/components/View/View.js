import React, {useEffect, useState,  useCallback} from 'react';
import { connect } from 'react-redux';

import './View.scss';

import Table from './../../core-components/Table/Table'
import Pagination from './../../core-components/Pagination/Pagination'
import Notification from './../Notifications/Notification'
import CoreModal from './../../core-components/CoreModal/CoreModal'

import * as corePagination from './../../helpers/CoreApi/CorePagination'

function View({state}) {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isShowModal, setShowModal] = useState(false)

    const {listVisitedIssues} = state
    const id = Math.floor(Math.random() * 100)

    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(true);
                const data = await corePagination.fetchList(`https://api.github.com/repos/rails/rails/issues?page=${currentPage}&per_page=5`);
                if (data.length) {
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
    const paginate = useCallback(pageNumber => setCurrentPage(pageNumber) , [])
    const closeModal = useCallback(() => setShowModal(false) , [])

    return (
        <div className="View">
            <div className="View__content"> 
                <div className="notification" onClick={() => {
                    if (listVisitedIssues.length) setShowModal(true)
                }}> 
                    <Notification />
                </div>
                <Table listIssues={list} loading={loading} currentPage={currentPage} />
                <Pagination 
                    paginate={paginate}
                    currentPage={currentPage}
                    loading={loading}
                />
            </div>
            <CoreModal handleClose={closeModal} isShow={isShowModal} name="List Issues"> 
                <Table key={id} listIssues={listVisitedIssues} />
            </CoreModal>
        </div>
    );
}

const mapStateToProps = state => {
    return {
      state: state
    }
  }

export default connect(mapStateToProps, null)(React.memo(View));


