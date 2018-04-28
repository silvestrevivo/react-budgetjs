import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Add extends Component {
  // state = {  }
  render () {
    return (
      <div className="add">
        <div className="add__container">
          <select className="add__type" value={this.props.value} onChange={this.props.onChangeSign}>
            <option value="income">+</option>
            <option value="expense">-</option>
          </select>
          <input type="text" className="add__description" placeholder="Add description" onChange={this.props.onChangeSubject} />
          <input type="number" className="add__value" placeholder="Value" onChange={this.props.onChangeNumber} />
          <button className="add__btn" onClick={this.props.onClick}>
            <i className="ion-ios-checkmark-outline" />
          </button>
        </div>
      </div>
    )
  }
}

Add.propTypes = {
  value: PropTypes.string,
  onChangeSign: PropTypes.func,
  onChangeSubject: PropTypes.func,
  onChangeNumber: PropTypes.func,
  onClick: PropTypes.func
}

export default Add
