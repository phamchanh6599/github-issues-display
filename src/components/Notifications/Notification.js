import React from "react";
import { connect } from 'react-redux';

import "./Notification.scss";
import CoreIcon from "./../../core-components/CoreIcon/CoreIcon";

function Notification({state}) {
  const {listVisitedIssues} = state

  return (
    <div className="Notification">
       <span className="Notification__circle">{listVisitedIssues.length}</span> 
      <CoreIcon icon="notification" fillColor="#68177b" />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, null)(Notification);
