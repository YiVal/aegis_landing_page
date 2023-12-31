<template>
  <q-page view="1Hh Lpr 1Ff">
    <introduction-block />
    <!--
    <div class="row index-0">
      <div class="col-3"></div>
      <div class="index-0 col-6">
        <h4>Introduction</h4>
        <p>
          <b>
            Craft Stellar STEM Essays in Just 5 Minutes With $30: Detailed,
            Plagiarism-free, and xxx.
          </b>
        </p>
        <p>Complete with Data, Graphs, Codes, and Analysis.</p>
        <a href="/">Try for Free.</a>
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row index-0"><p></p></div>
    <div class="row index-0"><p></p></div>

    <div class="row index-1">
      <div class="col-3"></div>
      <div class="index-1 col-6">
        <h4>Video Demo</h4>
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/xjMAPfFEJuM?rel=0"
        />
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row index-1"><p></p></div>
    <div class="row index-1"><p></p></div>

    <div class="row index-2">
      <div class="col-3"></div>
      <div class="index-2 col-6">
        <h4>Workflow Breakdown</h4>
        <q-card class="q-pa-md">
          <q-skeleton height="170px" square animation="fade" />

          <div class="row items-start no-wrap q-mt-sm">
            <q-skeleton size="56px" square animation="fade" />

            <div class="col q-pl-sm">
              <q-skeleton type="text" square width="30%" animation="fade" />
              <q-skeleton type="text" square height="12px" animation="fade" />
              <q-skeleton
                type="text"
                square
                height="12px"
                width="75%"
                animation="fade"
              />
            </div>
          </div>
        </q-card>
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row index-2"><p></p></div>
    <div class="row index-2"><p></p></div>

    <div class="row index-3">
      <div class="col-3"></div>
      <div class="index-3 col-6">
        <h4>Compare With Others</h4>
        <p>How our products stand out from our competitor:</p>
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row index-3 q-gutter-md">
      <div class="col"></div>
      <q-card flat bordered class="col-3">
        <q-card-section>
          <h5>Us</h5>
          <ul>
            <li>
              Fully affordable with $30 to generate a full essay with data,
              tables, codes, and graphs all included.
            </li>
            <li>
              Fully controllable by you, simply re-generate the results every
              time you are unsatisfied with it.
            </li>
            <li>
              Absolutely Plagiarism-free and GPT-free, passed all AI detection
              test.
            </li>
          </ul>
        </q-card-section>
      </q-card>
      <q-card flat bordered class="col-3">
        <q-card-section>
          <h5>Essay Gunner</h5>
          <ul>
            <li>
              Charged $30 per single page, plus extra fees on tables and graphs.
            </li>
            <li>
              Need to go back and forth with the writer on the topics, outlines
              and etc.
            </li>
            <li>Plagiarism risks as the gunner might loaf on the job.</li>
          </ul>
        </q-card-section>
      </q-card>
      <q-card flat bordered class="col-3">
        <q-card-section>
          <h5>ChatGPT</h5>
          <ul>
            <li>Unable to produce multiple paragraphs.</li>
            <li>
              Unable to produce consistent content throughout each section of
              the essay.
            </li>
            <li>Can easily been detected as written by AI.</li>
          </ul>
        </q-card-section>
      </q-card>
      <div class="col"></div>
    </div>
    <div class="row index-3"><p></p></div>
    <div class="row index-3"><p></p></div>

    <div class="row index-4">
      <div class="col-3"></div>
      <div class="index-4 col-6">
        <h4>User Feedback</h4>
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row index-4">
      <div class="col-2"></div>
      <div class="q-pa-md col-2" v-for="i in [0, 1, 2, 3]" :key="i">
        <q-card flat bordered>
          <q-item>
            <q-item-section avatar>
              <q-skeleton type="QAvatar" animation="fade" />
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <q-skeleton type="text" animation="fade" />
              </q-item-label>
              <q-item-label caption>
                <q-skeleton type="text" animation="fade" />
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-skeleton height="200px" square animation="fade" />

          <q-card-section>
            <q-skeleton type="text" class="text-subtitle2" animation="fade" />
            <q-skeleton
              type="text"
              width="50%"
              class="text-subtitle2"
              animation="fade"
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="row index-4"><p></p></div>

    <div class="row index-5">
      <div class="col-3"></div>
      <div class="index-5 col-6">
        <h4>Pricing</h4>
        <p>
          Every accout starts with 100 credits. You can purchase more credits
          for your needs:
        </p>
        <div class="row index-5 q-gutter-md">
          <q-card flat bordered class="col-5 q-pa-md">
            <q-table
              bordered
              flat
              hide-bottom
              separator="vertical"
              :rows="credit_rows"
              :columns="credit_columns"
            ></q-table>
          </q-card>
          <q-card flat bordered class="col-5 q-pa-md">
            <q-table
              bordered
              flat
              hide-bottom
              separator="vertical"
              :rows="service_rows"
              :columns="service_columns"
            ></q-table>
          </q-card>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row index-5"><p></p></div>
    <div class="row index-5"><p></p></div>
  -->
  </q-page>
</template>

<script setup>
import IntroductionBlock from 'components/IntroductionBlock.vue'

const credit_columns = [
  { name: 'price', label: 'Price', field: 'price' },
  { name: 'credit', label: 'Credit', field: 'credit' },
]
const credit_rows = [
  {
    price: '$9.9',
    credit: '50',
  },
  {
    price: '$29.9',
    credit: '200',
  },
  {
    price: '$49.9',
    credit: '1000',
  },
  {
    price: 'Enterprise',
    credit: 'Contact Us',
  },
]

const service_columns = [
  { name: 'service', align: 'left', label: 'Service', field: 'service' },
  { name: 'credit', label: 'Credit', field: 'credit' },
]
const service_rows = [
  {
    service: 'Topic Choosing',
    credit: '20',
  },
  {
    service: 'Outline Generation',
    credit: '30',
  },
  {
    service: 'Essay Writer',
    credit: '200',
  },
  {
    service: 'Polisher',
    credit: '50',
  },
]
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
