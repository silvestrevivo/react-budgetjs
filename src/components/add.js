import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class Add extends Component {
  // state = {  }

  render () {
    return (
      <div className="add">
        <form className="add__container" onSubmit={this.props.onSubmit} ref={this.props.inputRef}>
          <select className={ClassNames('add__type', this.props.sign === 'expense' ? 'red-focus' : null)} name="select" onChange={this.props.onChange}>
            <option value="income">+</option>
            <option value="expense">-</option>
          </select>
          <input type="text" className={ClassNames('add__description', this.props.sign === 'expense' ? 'red-focus' : null)} name="subject" placeholder="Add description" />
          <input type="number" className={ClassNames('add__value', this.props.sign === 'expense' ? 'red-focus' : null)} placeholder="Value" name="number" />
          <button className="add__btn" type="submit">
            <i className="ion-ios-checkmark-outline" />
          </button>
        </form>
      </div>
    )
  }
}

Add.propTypes = {
  sign: PropTypes.string,
  onChange: PropTypes.func,
  inputRef: PropTypes.object,
  onSubmit: PropTypes.func
}

export default Add
