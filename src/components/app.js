import React, { Component } from 'react'

class App extends Component {
  state = {}
  render () {
    return (
      <div>
        <div className="top">
          <div className="budget">
            <div className="budget__title">
              Available Budget in <span className="budget__title--month">May</span>:
            </div>

            <div className="budget__value">+ 2,345.64</div>

            <div className="budget__income clearfix">
              <div className="budget__income--text">Income</div>
              <div className="right">
                <div className="budget__income--value">+ 4,300.00</div>
                <div className="budget__income--percentage">&nbsp;</div>
              </div>
            </div>

            <div className="budget__expenses clearfix">
              <div className="budget__expenses--text">Expenses</div>
              <div className="right clearfix">
                <div className="budget__expenses--value">- 1,954.36</div>
                <div className="budget__expenses--percentage">45%</div>
              </div>

            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="add">
            <div className="add__container">
              <select className="add__type">
                <option value="income" selected>+</option>
                <option value="expense">-</option>
              </select>
              <input type="text" className="add__description" placeholder="Add description" />
              <input type="number" className="add__value" placeholder="Value" />
              <button className="add__btn"><i className="ion-ios-checkmark-outline" /></button>
            </div>
          </div>

          <div className="container clearfix">
            <div className="income">
              <h2 className="icome__title">Income</h2>
              <div className="income__list">

                ----
                <div className="item clearfix" id="income-0">
                  <div className="item__description">Salary</div>
                  <div className="right clearfix">
                    <div className="item__value">+ 2,100.00</div>
                    <div className="item__delete">
                      <button className="item__delete--btn"><i className="ion-ios-close-outline" /></button>
                    </div>
                  </div>
                </div>
                ----

              </div>
            </div>

            <div className="expenses">
              <h2 className="expenses__title">Expenses</h2>
              <div className="expenses__list">

                ----

                <div className="item clearfix" id="expense-0">
                  <div className="item__description">Dining out with Mark</div>
                  <div className="right clearfix">
                    <div className="item__value">- 18.67</div>
                    <div className="item__percentage">1%</div>
                    <div className="item__delete">
                      <button className="item__delete--btn"><i className="ion-ios-close-outline" /></button>
                    </div>
                  </div>
                </div>
                ----

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
