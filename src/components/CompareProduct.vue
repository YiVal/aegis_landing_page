<template>
  <div>
    <div style="height: 120px"></div>
    <div class="row justify-center">
      <div class="col"></div>
      <div class="col-12 col-md-auto">
        <div class="cp-title justify-center">
          What makes our products unique compared to competitors?
        </div>
      </div>
      <div class="col"></div>
    </div>
    <div style="height: 56px"></div>
    <div class="row justify-center">
      <div class="col"></div>
      <product-card :lines="stem_lines" />
      <product-card :lines="gunner_lines" title="/gunner.png" />
      <product-card :lines="chatgpt_lines" title="/chatgpt.png" />
      <div class="col"></div>
    </div>
    <div style="height: 56px"></div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue'

const stem_lines = [
  'Fully affordable with $30 to generate a full essay with data, tables, codes, and graphs all included.',
  'Fully controllable by you, simply re-generate the results every time you are unsatisfied with it.',
  'Absolutely Plagiarism-free and GPT-free, passes all AI detection test.',
]
const gunner_lines = [
  'Charged $30 per single page, plus extra fees on tables and graphs.',
  'Need to go back and forth with the writer on the topics, outlines, etc.',
  'Plagiarism risks as the gunner might loaf on the job.',
]
const chatgpt_lines = [
  'Unable to produce multiple paragraphs.',
  'Unable to produce consistent content throughout each section of the essay.',
  'Can easily been detected as written by AI',
]
</script>

<style scoped>
.cp-title {
  max-width: 1024px;
  color: var(--title, #1f1f1f);
  text-align: center;
  font-family: Inter;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
