<template>
  <div class="home">
    <h1>PromptPay</h1>
    <button class="btn btn-success" @click="onPlaceorder">pay</button>
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
      amount : 100
    };
  },
  mounted() {
    Omise.setPublicKey(process.env.VUE_APP_OMISE_PUBLIC_KEY);
    this.createSource();
  },
  methods: {
    createSource() {
      return new Promise((resolve, reject) => {
        Omise.createSource(
          "promptpay",
          {
            amount: this.amount * 100,
            currency: "THB",
          },
          async (statusCode, response) => {
            if (statusCode !== 200) {
              return reject(response);
            }
            console.log("response :: ",response)
            this.sourceId = response.id;
            this.amount = response.amount
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
          endpoint: "/promptpay"
        }
      );
      window.location.href = response.data.data.redirectUrl;
    },
  },
};
</script>
