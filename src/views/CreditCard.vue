<template>
  <div class="home">
    <h1>CreditCard</h1>
    <form name="checkoutForm" method="POST" action="/">
      <button class="btn btn-success" type="submit" id="checkout-button">
        pay
      </button>
    </form>
  </div>
</template>

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
    OmiseCard.configureButton("#checkout-button", {
      publicKey: process.env.VUE_APP_OMISE_PUBLIC_KEY,
      amount: 100000,
      frameLabel: "Merchant Name",
      submitLabel: "Pay",
    });

    OmiseCard.attach();
  },
  methods: {
    createSource() {
      return new Promise((resolve, reject) => {
        Omise.createSource(
          "rabbit_linepay",
          {
            amount: this.amount * 100,
            currency: "THB",
          },
          async (statusCode, response) => {
            if (statusCode !== 200) {
              return reject(response);
            }
            console.log("response :: ", response);
            this.sourceId = response.id;
            this.amount = response.amount;
            resolve(response);
          }
        );
      });
    },
    async onPlaceorder() {
      const response = await axios.post(
        "http://localhost:3000/api/user/omise/placeorder",
        {
          source: this.sourceId,
          amount: this.amount,
          call_id: "1234567890",
          endpoint: "/",
        }
      );
      window.location.href = response.data.data.redirectUrl;
    },
  },
};
</script>
