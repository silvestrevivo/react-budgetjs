import React from 'react'
import PropTypes from 'prop-types'

const Income = ({ number, subject, onClick }) => {
  return (
    <div className="item clearfix" id="income-0">
      <div className="item__description">{subject}</div>
      <div className="right clearfix">
        <div className="item__value">+ {number}</div>
        <div className="item__delete">
          <button className="item__delete--btn" onClick={onClick}>
            <i className="ion-ios-close-outline" />
          </button>
        </div>
      </div>
    </div>
  )
}

Income.propTypes = {
  number: PropTypes.number,
  subject: PropTypes.string,
  onClick: PropTypes.func
}

export default Income
