<script setup lang="ts"></script>

<template>
  <section class="container">
    <header>header</header>

    <aside>aside</aside>

    <main>main</main>
  </section>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 2;
}

.container header {
  grid-column: 1 / 3;
  grid-row: 1;
}

.container aside {
  grid-column: 1;
  grid-row: 2;
}

.container main {
  grid-column: 2;
  grid-row: 2;
}
</style>
