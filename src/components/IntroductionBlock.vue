<template>
  <div class="introduction">
    <div class="row justify-center">
      <div class="index-intro col-8">
        <div class="title">{{ $t('title') }}</div>
        <p>
          {{ $t('description') }}
        </p>
        <start-for-free />
      </div>
    </div>
    <div class="row justify-center">
      <div class="col intro-demo">
        <q-img src="/stemessay.gif" max-width="640px"></q-img>
      </div>
    </div>
  </div>
</template>

<script setup>
import StartForFree from 'components/StartForFree.vue'
</script>

<style scoped>
.index-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-bottom: 40px;
  margin-top: 64px;
}
.title {
  max-width: 836px;
  color: var(--title, #1f1f1f);
  text-align: center;
  font-family: Inter;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
p {
  max-width: 452px;
  color: var(--body, #646464);
  text-align: center;
  font-family: Inter;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 152.381% */
}

.intro-demo {
  /* background-color: black; */
  max-width: 640px;
  padding-top: 40px;
}
</style>
