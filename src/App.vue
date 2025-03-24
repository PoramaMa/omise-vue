<template>
  <div id="app">
    <nav
      class="flex flex-wrap items-center justify-center gap-4 bg-white py-4 shadow"
    >
      <router-link
        to="/"
        class="text-gray-800 font-semibold hover:text-blue-600"
        >บัตรเครดิต</router-link
      >
      <router-link
        to="/promptpay"
        class="text-gray-800 font-semibold hover:text-blue-600"
        >พร้อมเพย์</router-link
      >
      <router-link
        to="/rabbit_linepay"
        class="text-gray-800 font-semibold hover:text-blue-600"
        >แรบบิทไลน์เพย์</router-link
      >
      <router-link
        to="/truemoneywallet"
        class="text-gray-800 font-semibold hover:text-blue-600"
        >ทรูมันนี่วอลเล็ท</router-link
      >

      <!-- Dropdown -->
      <div class="relative group">
        <button class="text-gray-800 font-semibold hover:text-blue-600 px-2">
          โมบายแบงก์กิ้ง
        </button>
        <div
          class="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded z-50"
        >
          <ul class="min-w-[220px] text-left">
            <li>
              <router-link
                to="/MobileBanking/kbank"
                class="block px-4 py-2 hover:bg-gray-100"
              >
                ธนาคารกสิกรไทย (KBank)
              </router-link>
            </li>
            <li>
              <router-link
                to="/MobileBanking/scb"
                class="block px-4 py-2 hover:bg-gray-100"
              >
                ธนาคารไทยพาณิชย์ (SCB)
              </router-link>
            </li>
            <li>
              <router-link
                to="/MobileBanking/krungsri"
                class="block px-4 py-2 hover:bg-gray-100"
              >
                ธนาคารกรุงศรี (Krungsri)
              </router-link>
            </li>
            <li>
              <router-link
                to="/MobileBanking/bbl"
                class="block px-4 py-2 hover:bg-gray-100"
              >
                ธนาคารกรุงเทพ (BBL)
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="flex items-center justify-center mt-10">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.btn-success {
  text-align: center !important;
  display: flex;
  margin: auto;
  background-color: #42b983;
  padding: 10px;
  border: #2c3e50 solid;
  border-radius: 5px;
}
</style>
