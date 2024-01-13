<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white q-pa-md">
      <div class="row justify-center">
        <q-toolbar class="col-8 justify-center">
          <q-icon name="img:logo-b.svg" class="icon" />
          <q-toolbar-title class="title">
            <b>{{ $t('appName') }}</b>
          </q-toolbar-title>
          <q-space class="gt-sm" />
          <q-btn unelevated class="header-button gt-sm" href="/pricing">
            {{ $t('pricing') }}
          </q-btn>
          <q-btn unelevated class="header-button gt-sm" href="/testimonial">
            {{ $t('testimonial') }}
          </q-btn>
          <q-space class="gt-sm" />
        </q-toolbar>

        <q-toolbar class="col-3 justify-center">
          <q-btn unelevated class="header-button" href="/login">Log In</q-btn>
          <start-for-free class="gt-sm" />
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer>
      <div class="row justify-center bg-black q-pa-md">
        <q-toolbar class="col-6 gt-xs">
          <q-btn unelevated class="footer-button" href="/pricing">
            {{ $t('pricing') }}
          </q-btn>
          <q-btn unelevated class="footer-button" href="/testimonial">
            {{ $t('testimonial') }}
          </q-btn>
        </q-toolbar>
        <q-toolbar class="col-12 col-md-6">
          <q-toolbar-title></q-toolbar-title>
          <q-btn unelevated class="footer-button" href="/terms-of-service"
            >Terms of Service</q-btn
          >
          <q-btn unelevated class="footer-button" href="/privacy-policy"
            >Privacy Policy</q-btn
          >
          <q-btn unelevated class="footer-button" href="/copyright"
            >© 2024 STEM Essays</q-btn
          >
        </q-toolbar>
      </div>
    </footer>
  </q-layout>
</template>

<script setup>
import StartForFree from 'components/StartForFree.vue'
</script>

<style scoped>
.header-toolbar {
  /* display: flex; */
  padding: 24px 150px;
  /* justify-content: space-between; */
}

.footer-toolbar {
  /* display: flex; */
  /* padding: 24px 150px; */
  /* justify-content: space-between; */
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
