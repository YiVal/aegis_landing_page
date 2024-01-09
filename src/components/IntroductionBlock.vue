<template>
  <div class="introduction">
    <div class="row">
      <div class="col"></div>
      <div class="index-intro col-8">
        <div class="title">5-Minute STEM Essays: Plagiarism-Free</div>
        <p>
          The easy way to write a well-researched and informative STEM essay.
        </p>
        <start-for-free />
      </div>
      <div class="col"></div>
    </div>
    <div class="row intro-demo">
      <div class="col"></div>
      <div class="index-intro col-8">
        <q-img src="/stemessay.gif" width="640px"></q-img>
      </div>
      <div class="col"></div>
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
  padding-top: 40px;
}
</style>
