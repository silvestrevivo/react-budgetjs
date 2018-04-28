import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const Add = React.forwardRef((props, ref) => (
  <div className="add">
    <form className="add__container" onSubmit={props.onSubmit} ref={ref}>
      <select className={ClassNames('add__type', props.sign === 'expense' ? 'red-focus' : null)} name="select" onChange={props.onChange}>
        <option value="income" defaultValue>+</option>
        <option value="expense">-</option>
      </select>
      <input type="text" className={ClassNames('add__description', props.sign === 'expense' ? 'red-focus' : null)} name="subject" placeholder="Add description" />
      <input type="number" className={ClassNames('add__value', props.sign === 'expense' ? 'red-focus' : null)} placeholder="Value" name="number" />
      <button className="add__btn" type="submit">
        <i className="ion-ios-checkmark-outline" />
      </button>
    </form>
  </div>
))

Add.propTypes = {
  sign: PropTypes.string,
  onChange: PropTypes.func,
  inputRef: PropTypes.object,
  onSubmit: PropTypes.func
}

export default Add
