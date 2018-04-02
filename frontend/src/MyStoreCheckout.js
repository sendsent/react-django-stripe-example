import React from "react";
import { Elements } from "react-stripe-elements";

import InjectedCheckoutForm from "./CheckoutForm";

//Wrap <Elements /> around your checkout form to group the set
// of Stripe Elements you're using together, so Stripe can pull
// data from groups of Elements when tokenizing

class MyStoreCheckout extends React.Component {
  render() {
    return (
      <Elements>
        <InjectedCheckoutForm />
      </Elements>
    );
  }
}

export default MyStoreCheckout;
