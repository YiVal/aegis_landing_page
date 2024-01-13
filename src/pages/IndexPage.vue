<template>
  <q-page view="1Hh Lpr 1Ff">
    <introduction-block />
    <we-support />
    <compare-product />
  </q-page>
</template>

<script setup>
import IntroductionBlock from 'components/IntroductionBlock.vue'
import WeSupport from 'components/WeSupport.vue'
import CompareProduct from 'components/CompareProduct.vue'
</script>

<style>
.index-0 {
  background-color: white;
}

.index-1 {
  background-color: blueviolet;

  h4 {
    color: aliceblue;
  }
}

.index-2 {
  background-color: aquamarine;
}

.index-3 {
  background-color: cadetblue;

  p {
    color: aliceblue;
  }
  h4 {
    color: aliceblue;
  }
  h5 {
    text-align: center;
  }
}

.index-4 {
  background-color: cyan;
}

.index-5 {
  background-color: chocolate;

  p {
    color: aliceblue;
  }
  h4 {
    color: aliceblue;
  }
  h5 {
    text-align: center;
  }
}
</style>
