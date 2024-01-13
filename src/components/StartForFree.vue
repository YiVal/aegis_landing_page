<template>
  <q-btn class="start-button" href="/start-for-free">
    {{ $t('start_for_free') }}
  </q-btn>
</template>

<style scoped>
.start-button {
  border-radius: 8px;
  background: var(--main, #7261ed);
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 100% */
  text-transform: none;
}
</style>
