import React, { Component } from 'react'
import Add from './add'
import Income from './income'
import Expenses from './expenses'
import Budget from './budget'

class App extends Component {
  constructor (props) {
    super(props)
    this.inputRef = React.createRef()
    this.state = {
      sign: 'income',
      income: [],
      expenses: []
    }
  }

  // Header functions
  incomeHelper = () => {
    const incomeTotal = this.state.income.map(item => item.number).reduce((a, b) => a + b, 0)
    return {
      string: `${String(incomeTotal).replace(/(.)(?=(\d{3})+$)/g, '$1,')},00`,
      number: incomeTotal
    }
  }

  expensesHelper = () => {
    const expensesTotal = this.state.expenses.map(item => item.number).reduce((a, b) => a + b, 0)
    return {
      string: `${String(expensesTotal).replace(/(.)(?=(\d{3})+$)/g, '$1,')},00`,
      number: expensesTotal
    }
  }

  availableHelper = () => {
    const availableTotal = this.incomeHelper().number - this.expensesHelper().number
    return availableTotal >= 0 ? `+ ${String(availableTotal).replace(/(.)(?=(\d{3})+$)/g, '$1,')}` : 'No money!!'
  }

  percentageGeneralHelper = () => {
    const incomeTotal = this.incomeHelper().number
    const expensesTotal = this.expensesHelper().number
    const percentage = Math.round((expensesTotal / incomeTotal) * 100)
    return isNaN(percentage) || (incomeTotal < expensesTotal) ? '---' : `${percentage} % `
  }

  // Input Functions
  onSubmit = (e) => {
    e.preventDefault()
    const form = this.inputRef.current
    const sign = form.elements['select'].value
    const subject = form.elements['subject'].value
    const number = form.elements['number'].value
    const { income, expenses } = this.state
    const id = Math.random()

    if (sign === 'income' && subject.length > 0 && number.length > 0) {
      this.setState({
        income: [...income, { id, subject, number: parseFloat(number) }]
      })
    } else if (sign === 'expense' && subject.length > 0 && number.length > 0) {
      const expenseWithOutPercentage = [...expenses, { id, subject, number: parseFloat(number), percentage: 0 }]
      const expensesWithOutPercentageTotal = expenseWithOutPercentage.map(item => item.number).reduce((a, b) => a + b, 0)
      const expensesWithPercentage = expenseWithOutPercentage.map(item => {
        return {
          ...item,
          percentage: Math.round((item.number / expensesWithOutPercentageTotal) * 100)
        }
      })
      this.setState({
        expenses: expensesWithPercentage
      })
    }
    this.inputRef.current.reset()
  }

  deleteItem = (type, id) => {
    const { income, expenses } = this.state
    if (type === 'income') {
      this.setState({
        income: income.filter(item => item.id !== id)
      })
    } else if (type === 'expenses') {
      const expensesFiltered = expenses.filter(item => item.id !== id)
      const expensesFilteredTotal = expensesFiltered.map(item => item.number).reduce((a, b) => a + b, 0)
      const expensesFilteredWithPercentageAdjusted = expensesFiltered.map(item => {
        return {
          ...item,
          percentage: Math.round((item.number / expensesFilteredTotal) * 100)
        }
      })
      this.setState({
        expenses: expensesFilteredWithPercentageAdjusted
      })
    }
  }

  // Output Map Arrays
  incomeArray = () => {
    const { income } = this.state
    return income.map(item => {
      return (
        <Income
          key={item.id}
          subject={item.subject}
          number={item.number}
          onClick={(type, id) => this.deleteItem('income', item.id)} />
      )
    })
  }

  expensesArray = () => {
    const { expenses } = this.state
    return expenses.map(item => {
      return (
        <Expenses
          key={item.id}
          subject={item.subject}
          number={item.number}
          percentage={item.percentage}
          onClick={(type, id) => this.deleteItem('expenses', item.id)} />
      )
    })
  }

  render () {
    const { sign } = this.state
    return (
      <div>
        <div className="top">
          <Budget
            income={this.incomeHelper().string}
            expenses={this.expensesHelper().string}
            available={this.availableHelper()}
            percentage={this.percentageGeneralHelper()}
          />
        </div>

        <div className="bottom">

          <Add
            onSubmit={this.onSubmit}
            ref={this.inputRef}
            onChange={(e) => this.setState({ sign: e.target.value })}
            sign={sign} />

          <div className="container clearfix">
            <div className="income">
              <h2 className="icome__title">Income</h2>
              <div className="income__list">
                {this.incomeArray()}
              </div>
            </div>
            <div className="expenses">
              <h2 className="expenses__title">Expenses</h2>
              <div className="expenses__list">
                {this.expensesArray()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
