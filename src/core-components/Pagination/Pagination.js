import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.scss';


Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired
}

function Pagination({paginate, currentPage, loading}) {

  const renderButton = () => {
    if (currentPage === 1) return <span className={"Pagination__next " + (loading ? "prevent-click" : "")} onClick={() => paginate(currentPage + 1)}> Next</span>
    return (
      <React.Fragment> 
        <span className={"Pagination__prev " + (loading ? "prevent-click" : "")} onClick={() => paginate(currentPage - 1)}> Previous</span>
        <span className={"Pagination__next " + (loading ? "prevent-click" : "")} onClick={() => paginate(currentPage + 1)}> Next</span>
      </React.Fragment>
    )
  }

  return (
    <div className="Pagination">
        {renderButton()}
    </div>
  );
}

export default Pagination;
