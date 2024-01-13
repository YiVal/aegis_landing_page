<template>
  <q-card class="col-3 col-md-8 product-card">
    <div class="row product-title" v-if="title === ''">
      <q-icon name="img:logo-b.svg" class="product-icon" />
      <b>{{ $t('appName') }}</b>
    </div>
    <div class="row product-title" v-else>
      <q-img :src="title" width="160px" height="45px" fit="fill" />
    </div>
    <div class="product-content row">
      <div class="product-item" v-for="line in props.lines" :key="line">
        <q-icon
          name="img:check.svg"
          style="margin-right: 10px; padding-top: 2px"
        />
        <p>{{ line }}</p>
      </div>
    </div>
  </q-card>
</template>

<script setup lang="ts">
interface Props {
  title: string
  lines: string[]
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
  lines: () => [],
})
</script>

<style scoped>
.product-card {
  color: var(--title, #1f1f1f);
  font-family: Inter;
  width: 360px;
  margin: 12px;
}
.product-title {
  padding: 28px 24px;
  font-size: 32px;
  font-style: normal;
  font-family: General Sans;
  font-weight: 700;
  line-height: normal;
  background: #ead9f5;
}
.product-icon {
  width: 36px;
  height: 36px;
  padding-top: 8px;
}
.product-content {
  padding: 28px 24px;
  gap: 12px;
}
.product-item {
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  color: var(--title, #1f1f1f);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
}
</style>
