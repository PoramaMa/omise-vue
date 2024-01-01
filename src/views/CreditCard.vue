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
      sourceId: "",
      amount: 100,
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
        this.onPayment();
      });
  },
  methods: {
    onPayment() {
      OmiseCard.open({
        amount: 12345,
        currency: "THB",
        onCreateTokenSuccess: (nonce) => {
          console.log("nonce :: ", nonce);
        },
        onFormClosed: () => {},
      });
    },
  },
};
</script>
