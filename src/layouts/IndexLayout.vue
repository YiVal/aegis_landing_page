<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar class="header-toolbar">
        <q-icon name="img:logo-b.svg" class="icon" />
        <q-toolbar-title class="title"> <b>STEM Essay!</b> </q-toolbar-title>

        <q-btn unelevated class="header-button" href="/pricing">Pricing</q-btn>
        <q-btn unelevated class="header-button" href="/testimonial"
          >Testimonial</q-btn
        >
        <q-space />
        <q-btn unelevated class="header-button" href="/login">Log In</q-btn>
        <start-for-free />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer>
      <q-toolbar class="footer-toolbar">
        <q-btn unelevated class="footer-button" href="/pricing">Pricing</q-btn>
        <q-btn unelevated class="footer-button" href="/testimonial"
          >Testimonial</q-btn
        >
        <q-toolbar-title></q-toolbar-title>
        <q-btn unelevated class="footer-button" href="/terms-of-service"
          >Terms of Service</q-btn
        >
        <q-btn unelevated class="footer-button" href="/privacy-policy"
          >Privacy Policy</q-btn
        >
        <q-btn unelevated class="footer-button" href="/copyright"
          >© 2023 STEM Essays</q-btn
        >
      </q-toolbar>
    </footer>
  </q-layout>
</template>

<script setup>
import StartForFree from 'components/StartForFree.vue'
</script>

<style scoped>
.header-toolbar {
  display: flex;
  max-width: 1440px;
  padding: 24px 150px;
  justify-content: space-between;
}

.footer-toolbar {
  display: flex;
  max-width: 1440px;
  padding: 24px 150px;
  justify-content: space-between;
  background: var(--title, #1f1f1f);
}

.title {
  color: var(--title, #1f1f1f);
  font-family: General Sans;
  font-size: 27.42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.icon {
  width: 36px;
  height: 36px;
}
.item {
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--Text-Black, #0e0d21);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 100% */
  align-content: center;
  text-decoration: none;
}
.header-button {
  color: var(--Text-Black, #0e0d21);
  font-size: 16px;
  font-style: normal;
  align-content: center;
  text-transform: none;
}

.footer-button {
  color: #c7c6c4;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  text-transform: none;
}
</style>
