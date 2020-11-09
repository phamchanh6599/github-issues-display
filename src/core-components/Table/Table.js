import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import './Table.scss';

Table.propTypes = {
    listIssues: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
}

function Table({listIssues, loading, currentPage}) {
  const [selectedItem, setItem] = useState(null)

  useEffect(() => {
    setItem(null)
  }, [currentPage])

  const handleClickItem = (idx) => {
    setItem(idx)
  }

  const renderContentTable = () => {
    return (
      listIssues.map((item, idx) => {
        return (
          <tr onClick={() => handleClickItem(idx)} key={idx} className={idx === selectedItem ? "active" : ""}>
            <td> {item.id} </td>
            <td> {item.title} </td>
          </tr>  
        )
      })
    )
  }

  return (
    <div className="Table" style={{ border: loading ? "1px solid #999999" : ""}}>
        <table>
            <thead className="Table__table-hover"> 
              <tr>
                <th> ID </th>
                <th> Title </th>
              </tr>
            </thead>
            <tbody className={loading ? 'loading' : ''}>
              {renderContentTable()}
            </tbody>
        </table>
    </div>
  );
}

export default Table;
