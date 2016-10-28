var React = require('react');

var Main = React.createClass({
  getInitialState: function () {
    return {
      cardNumber: null,
      securityCode: null,
      name: null,
      month: null,
      year: null,
      cardType: "Enter your card information above",
      errorMessage: null,
      disabled: false
    }
  },
  
  validateInfo: function (cardNumber, securityCode, name, month, year) {
    var date = new Date();
    var currentMonth = date.getMonth();
    if (isNaN(cardNumber) || isNaN(securityCode)) {
      this.setState({
        errorMessage: 'Please enter numbers only.',
        disabled: true
      });
      return false;
    } else if (cardNumber.length !== 16 || securityCode.length !== 3) {
      this.setState({
        errorMessage: 'Please enter required digits.',
        disabled: true
      });
      return false;
    } else if (month < currentMonth && year == 2016) {
      this.setState({
        errorMessage: 'Your card has expired.',
        disabled: true
      });
      return false;
    } else {
      this.setState({
        errorMessage: null
      });
      return true;
    }
  },
  
  getFormValue: function () {
    var cardNumber = this.refs.cardNumber.value;
    var securityCode = this.refs.securityCode.value;
    var name = this.refs.name.value;
    var month = this.refs.month.value;
    var year = this.refs.year.value;
    var formInfo = {
      cardNumber,
      securityCode,
      name,
      month,
      year
    };
    return formInfo;
    
  },
  
  getFormState: function () {
    var {cardNumber, securityCode, name, month, year} = this.state;
    var formState = {
      cardNumber,
      securityCode,
      name,
      month,
      year
    };
    return formState;
  },
  
  onFormChange: function () {
    var formInfo = this.getFormValue();
    var formState = this.getFormState();
    if (JSON.stringify(formInfo) === JSON.stringify(formState)) {
      this.setState({disabled: true});
    } else {
      this.setState({disabled: false});
    }
  },
  
  onFormSubmit: function (event) {
    event.preventDefault();
       
    var cardNumber = this.refs.cardNumber.value;
    var securityCode = this.refs.securityCode.value;
    var name = this.refs.name.value;
    var month = this.refs.month.value;
    var year = this.refs.year.value;
    var cardPrefix = cardNumber.substring(0,2);
    var formInfo = {
      cardNumber,
      securityCode,
      name,
      month,
      year,
      disabled: true
    };
    if (this.validateInfo(cardNumber, securityCode, name, month, year)) {
      if (cardPrefix == 34 || cardPrefix == 37) {
        $(".card-type span").removeClass().addClass("label info");
        this.setState({
          ...formInfo,
          cardType: 'American Express',
        });
      } else if (cardPrefix >= 50 && cardPrefix <= 55) {
        $(".card-type span").removeClass().addClass("label warning");
        this.setState({
          ...formInfo,
          cardType: 'MasterCard'
        });
      } else if (cardPrefix >= 40 && cardPrefix <= 49) {
        $(".card-type span").removeClass().addClass("label success");
        this.setState({
          ...formInfo,
          cardType: 'Visa'
        });
      } else {
        $(".card-type span").removeClass();
        this.setState({
          ...formInfo,
          errorMessage: 'Credit Card Not Support'
        });
      }
    }
  },
  
  render: function () {
    var {cardNumber, securityCode, name, month, year, cardType, errorMessage, disabled} = this.state;
    console.log(this.state);
    if (disabled) {
      $("button").attr("disabled", "disabled");
    } else {
      $("button").attr("disabled", false);
    }
    if (errorMessage) {
      $(".error-message span").addClass("label alert");
    } else {
      $(".error-message span").removeClass();
    }
    return (
      <div className="row">
        
        <form className="medium-8 columns" onSubmit={this.onFormSubmit} onChange={this.onFormChange}>
          <fieldset className="fieldset">
            <legend>Welcome {name}</legend>
            <div className="medium-6 columns">
              <label>
                Card Number
                <input type="number" placeholder="•••• •••• •••• ••••" maxLength="16" ref="cardNumber" className="inputText" required/>
              </label>
            </div>
            <div className="medium-6 columns">
              <label>
                Security Code
                <input type="number" placeholder="•••" pattern="\d*" ref="securityCode" maxLength="3" required/>
              </label>
            </div>
            <div className="medium-6 columns">
              <label htmlFor="">
                Name on Card
                <input type="text" name="name" ref="name" required/>
              </label>
            </div>
            <div className="medium-6 columns">
              <label>
                <span>Expiration</span>
                <div className="medium-12 columns">
                  <select name="month" className="medium-6 columns" ref="month" required>
                    <option value="" selected disabled>MM</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select name="year" className="medium-6 columns" ref="year" required>
                    <option value="" selected disabled>YY</option>
                    <option value="2016">16</option>
                    <option value="2017">17</option>
                    <option value="2018">18</option>
                    <option value="2019">19</option>
                    <option value="2020">20</option>
                    <option value="2021">21</option>
                    <option value="2022">22</option>
                  </select>
                </div>
              </label>
            </div>
            <div className="medium-5 columns card-type">
              <span>{cardType}</span>
            </div>
            <div className="medium-2 medium-offset-5 columns">
              <button type="submit" className="success button float-right">Pay</button>
            </div>
            <div className="medium-4 medium-offset-6 columns error-message">
              <span>{errorMessage}</span>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
});

module.exports = Main;