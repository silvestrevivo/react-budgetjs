import React from 'react'
import PropTypes from 'prop-types'

const Expenses = ({ number, subject, percentage, onClick }) => {
  return (
    <div className="item clearfix" id="expense-0">
      <div className="item__description">{subject}</div>
      <div className="right clearfix">
        <div className="item__value">- {number}</div>
        <div className="item__percentage">{percentage}%</div>
        <div className="item__delete">
          <button className="item__delete--btn" onClick={onClick}>
            <i className="ion-ios-close-outline" />
          </button>
        </div>
      </div>
    </div>
  )
}

Expenses.propTypes = {
  number: PropTypes.number,
  subject: PropTypes.string,
  percentage: PropTypes.number,
  onClick: PropTypes.func
}

export default Expenses
