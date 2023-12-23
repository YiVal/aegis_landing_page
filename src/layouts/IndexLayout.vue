<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" />

        <q-toolbar-title> Kakoo </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer>
      <p>Copyright © 2023</p>
    </footer>
  </q-layout>
</template>

<style>
footer {
  text-align: center;
}
</style>
