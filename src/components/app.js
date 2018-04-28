import React, { Component } from 'react'
import Add from './add'
import Income from './income'
import Expenses from './expenses'

class App extends Component {
  state = {
    sign: 'income',
    subject: '',
    number: null,
    income: [],
    expenses: []
  }

  // Header functions
  datumHelper = () => {
    const now = new Date()
    const month = now.getMonth()
    const year = now.getFullYear()
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return `${months[month]}, ${year}`
  }

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
  handleInput = () => {
    const { sign, number, subject, income, expenses } = this.state
    const id = Math.random()
    if (sign === 'income' && subject.length > 0 && number !== null) {
      this.setState({
        income: [...income, { id, subject, number: parseFloat(number) }]
      })
    } else if (sign === 'expense' && subject.length > 0 && number !== null) {
      this.setState({
        expenses: [...expenses, { id, subject, number: parseFloat(number), percentage: 0 }]
      })
    }
  }

  deleteItem = (type, id) => {
    const { income, expenses } = this.state
    if (type === 'income') {
      this.setState({
        income: income.filter(item => item.id !== id)
      })
    } else if (type === 'expenses') {
      this.setState({
        expenses: expenses.filter(item => item.id !== id)
      })
    }
  }

  render () {
    const { income, expenses } = this.state
    return (
      <div>
        <div className="top">
          <div className="budget">
            <div className="budget__title">
              Available Budget in <span className="budget__title--month">{this.datumHelper()}</span>:
            </div>

            <div className="budget__value">{this.availableHelper()}</div>

            <div className="budget__income clearfix">
              <div className="budget__income--text">Income</div>
              <div className="right">
                <div className="budget__income--value">+ {this.incomeHelper().string}</div>
                <div className="budget__income--percentage">&nbsp;</div>
              </div>
            </div>

            <div className="budget__expenses clearfix">
              <div className="budget__expenses--text">Expenses</div>
              <div className="right clearfix">
                <div className="budget__expenses--value">- {this.expensesHelper().string}</div>
                <div className="budget__expenses--percentage">{this.percentageGeneralHelper()}</div>
              </div>

            </div>
          </div>
        </div>

        <div className="bottom">

          <Add
            value={this.state.sign}
            onChangeSign={(e) => this.setState({ sign: e.target.value })}
            onChangeSubject={(e) => this.setState({ subject: e.target.value })}
            onChangeNumber={(e) => this.setState({ number: e.target.value })}
            onClick={this.handleInput} />

          <div className="container clearfix">
            <div className="income">
              <h2 className="icome__title">Income</h2>
              <div className="income__list">

                {
                  income.map(item => {
                    return (
                      <Income
                        key={item.id}
                        subject={item.subject}
                        number={item.number}
                        onClick={(type, id) => this.deleteItem('income', item.id)} />
                    )
                  })
                }

              </div>
            </div>

            <div className="expenses">
              <h2 className="expenses__title">Expenses</h2>
              <div className="expenses__list">

                {
                  expenses.map(item => {
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

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
