<template>
  <div class="home">
    <h1>CreditCard</h1>
    <form id="checkoutForm">
      <button id="checkoutButton">pay</button>
    </form>
  </div>
</template>

<script setup></script>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      email: "john.doe@example.com",
      name: "John Doe",
      amount: 12345,
      token: "",
    };
  },
  mounted() {
    OmiseCard.configure({
      publicKey: process.env.VUE_APP_OMISE_PUBLIC_KEY,
      defaultPaymentMethod: "credit_card",
      otherPaymentMethod: [],
      frameLabel: "Slide Me",
      submitLabel: "Pay",
    });
    OmiseCard.attach();
    document
      .querySelector("#checkoutButton")
      .addEventListener("click", (event) => {
        event.preventDefault();
        this.omiseCardHandler();
      });
  },
  methods: {
    omiseCardHandler() {
      OmiseCard.open({
        amount: this.amount,
        currency: "THB",
        onCreateTokenSuccess: (nonce) => {
          this.token = nonce;
          this.onPayment()
        },
        onFormClosed: () => {},
      });
    },

    async onPayment() {
      const response = await axios.post(
        "http://localhost:3000/api/user/omise/payment/card",
        {
          email: this.email,
          name: this.name,
          amount: this.amount,
          token: this.token,
        }
      );
      console.log("response :: ",response)
    },
  },
};
</script>
