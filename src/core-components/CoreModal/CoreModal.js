import React from "react";
import PropTypes from 'prop-types';

import "./CoreModal.scss";

CoreModal.propTypes = {
  name: PropTypes.string,
  isShow: PropTypes.bool,
}

CoreModal.defaultProps = {
  name: "",
  isShow: false
}


function CoreModal({children, isShow, handleClose, name}) {
  const showHideClassName = isShow ? "CoreModal" : "none";

  return (
    <div className={showHideClassName}>
      <div className="CoreModal__modal">
        <div className="CoreModal__header">
            <span className="CoreModal__title"> {name}</span>
            <span className="CoreModal__close-icon" onClick={handleClose}> x </span>        
        </div>
        {children}
      </div>
      <div className="CoreModal__background" onClick={handleClose} />
    </div>
  );
}

export default CoreModal;
