## An example of Stripe integration in React + Django

### Description:
An async loaded Stripe credit card form rendered in a react component which triggers requests to Django.


### How to use:
- Go to https://dashboard.stripe.com and register.
- In your stripe dashboard click on Developers -> API keys in the left side menu - you should see your publishable and secret keys
- Clone the repo

#### Frontend
1. cd frontend && npm install
2. make a .env file in the frontend directory and insert the your Publishable key from the dasboard: 
REACT_APP_publishable="YOUR_PUBLISHABLE_KEY"
3. npm start and you should see your credit card form rendered
#### Backend
1. cd backend, create a virtualenv, activate it and do a pip install -r requirements.txt
2. make a .env file in your backend direcotry and post your Stripe Secret Key from the Dashbaord:
STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY
3. python manage.py runserver and go open the payments(https://dashboard.stripe.com/test/payments) section on your dasboard
if you use any of stripe's test(https://stripe.com/docs/testing) credit card numbers to try out the form your payments section
in the dashboard should update accordingly



