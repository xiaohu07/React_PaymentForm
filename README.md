# React_PaymentForm
Payment form app in ReactJS

# To run the project:
0. Go to Desktop/Udemy/React_PaymentForm
  -- sorry about the long path ^_^
1. git clone https://github.com/xiaohu07/React_PaymentForm.git
  -- to your desired local folder
  
2. npm install
  -- install all dependencies

3. webpack
  -- create bundle.js file
  
4. node server.js
  -- run the program
  
5. http://localhost:3000/
  -- open the url in browser
  
  -----------------------------------------
# This app is designed to:

1. Enter credit card info and submit payment

2. Show credit card type by check the prefix of card number

3. Avoid multiple submission if the filed is not changed

4. Dispaly card holder name at the top after submission

5. All styling comes from Foundation for Sites

  -----------------------------------------------
# Validation

1. Both card number and security code fields can enter Numbers only, and the required lenth are 16 and 3-digit respectively. Otherwise will throw a error message

2. The expiration date must be later than current date

3. It only accepts Visa, MasterCard, and American Express card. And their prefix are:
    1> Visa 4XXX XXXX XXXX XXXX
    2> MasterCard 50~55XX XXXX XXXX XXXX
    3> American Express 34/37XX XXXX XXXX XXXX

4. Any card number that doesn't start with these prefixes will show an error message at the bottom

  -----------------------------------------------
# Reference:
1. https://creditcardjs.com/credit-card-type-detection

2. https://facebook.github.io/react/

3. http://foundation.zurb.com/sites/docs/v

