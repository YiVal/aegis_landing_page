<template>
  <div class="support q-pa-md q-gutter-md items-start">
    <div class="row">
      <div class="col"></div>
      <div class="col-8">
        <p>
          {{ $t('we_support') }}
        </p>
      </div>
      <div class="col"></div>
    </div>
    <div class="row justify-center">
      <q-card class="col-2 col-md-8 support-card">
        <q-card-section>
          <div style="height: 20px"></div>
          <q-img src="ap.png" class="support-icon"></q-img
        ></q-card-section>
        <q-card-section>Advanced Placement Program (AP)</q-card-section>
      </q-card>
      <q-card class="col-2 col-md-8 support-card">
        <q-card-section
          ><q-img src="ib.png" class="support-icon"></q-img
        ></q-card-section>
        <q-card-section>International Baccalaureate® (IB)</q-card-section>
      </q-card>
      <q-card class="col-2 col-md-8 support-card">
        <q-card-section
          ><q-img src="harvard.png" class="support-icon"></q-img
        ></q-card-section>
        <q-card-section>Undergraduate Application Essay</q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
p {
  color: var(--body, #646464);
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 90% */
}

.support-card {
  background: var(--main, #7261ed);
  width: 200px;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 100% */
  margin: 12px;
}
.support-icon {
  max-width: 100px;
  max-height: 100px;
}
</style>
