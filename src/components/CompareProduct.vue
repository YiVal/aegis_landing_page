<template>
  <div>
    <div style="height: 120px"></div>
    <div class="row justify-center">
      <div class="col"></div>
      <div class="col-10 col-md-auto">
        <div class="cp-title justify-center">
          {{ $t('cp_title') }}
        </div>
      </div>
      <div class="col"></div>
    </div>
    <div style="height: 56px"></div>
    <div class="row justify-center">
      <div class="row justify-center">
        <product-card :lines="stem_lines" />
        <product-card :lines="gunner_lines" title="/gunner.png" />
        <product-card :lines="chatgpt_lines" title="/chatgpt.png" />
      </div>
    </div>
    <div style="height: 56px"></div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import ProductCard from './ProductCard.vue'

const stem_lines = [t('stem_line0'), t('stem_line1'), t('stem_line2')]
const gunner_lines = [t('gunner_line0'), t('gunner_line1'), t('gunner_line2')]
const chatgpt_lines = [
  t('chatgpt_line0'),
  t('chatgpt_line1'),
  t('chatgpt_line2'),
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
