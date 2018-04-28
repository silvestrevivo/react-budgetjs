import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Add extends Component {
  // state = {  }

  render () {
    return (
      <div className="add">
        <form className="add__container" onSubmit={this.props.onSubmit} ref={this.props.inputRef}>
          <select className="add__type" name="select" >
            <option value="income">+</option>
            <option value="expense">-</option>
          </select>
          <input type="text" className="add__description" name="subject" placeholder="Add description" />
          <input type="number" className="add__value" placeholder="Value" name="number" />
          <button className="add__btn" type="submit">
            <i className="ion-ios-checkmark-outline" />
          </button>
        </form>
      </div>
    )
  }
}

Add.propTypes = {
  inputRef: PropTypes.obj,
  onSubmit: PropTypes.func
}

export default Add
