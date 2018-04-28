import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Budget extends Component {
  // state = {}

  static propTypes = {
    available: PropTypes.string,
    expenses: PropTypes.string,
    income: PropTypes.string,
    percentage: PropTypes.string
  }

  datumHelper = () => {
    const now = new Date()
    const month = now.getMonth()
    const year = now.getFullYear()
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return `${months[month]}, ${year}`
  }

  render () {
    const { available, expenses, income, percentage } = this.props

    return (
      <div className="budget">
        <div className="budget__title">
          Available Budget in <span className="budget__title--month">{this.datumHelper()}</span>:
        </div>

        <div className="budget__value">{available}</div>

        <div className="budget__income clearfix">
          <div className="budget__income--text">Income</div>
          <div className="right">
            <div className="budget__income--value">+ {income}</div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div>

        <div className="budget__expenses clearfix">
          <div className="budget__expenses--text">Expenses</div>
          <div className="right clearfix">
            <div className="budget__expenses--value">- {expenses}</div>
            <div className="budget__expenses--percentage">{percentage}</div>
          </div>

        </div>
      </div>
    )
  }
}

export default Budget
