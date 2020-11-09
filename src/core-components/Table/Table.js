import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Table.scss';
import * as actions from './../../redux/actions/index';

Table.propTypes = {
    listIssues: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
}

function Table(props) {
  const [selectedItem, setItem] = useState(null)
  const {listIssues, loading, currentPage, listVisitedIssues, handleVisitedItem} = props;
  useEffect(() => {
    setItem(null)
  }, [currentPage])

  const handleClickItem = (item) => {
    if (item.id === selectedItem) setItem(null)
    else {
      handleVisitedItem(item)
      setItem(item.id)
    } 
  }

  const renderContentTable = () => {
    console.log("listVisitedIssues", listVisitedIssues)
    return (
      listIssues.map((item, idx) => {
        return (
          <tr onClick={() => handleClickItem(item)} key={idx} className={item.id === selectedItem ? "active" : ""}>
            <td> {item.id} </td>
            <td> {item.title} </td>
          </tr>  
        )
      })
    )
  }

  return (
    <div className="Table" style={{ border: loading && !listIssues.length ? "1px solid #999999" : ""}}>
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

const mapStateToProps = state => {
  return {
    listVisitedIssues: state.listVisitedIssues
  }
}

const mapDispactchToProps = dispatch => {
  return {
    handleVisitedItem  : item => dispatch(actions.addVisitedItem(item)),
  }
}

export default connect(mapStateToProps, mapDispactchToProps)(Table);
