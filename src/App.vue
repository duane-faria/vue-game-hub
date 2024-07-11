<script setup lang="ts">
import useGenres from './composables/useGenres'
import get from 'lodash.get'

// import Header from '@/components/header/Header.vue'
const { loading, error, data } = useGenres()
</script>

<template>
  <section class="container">
    <header>
      <input placeholder="search games" />
    </header>

    <aside>
      <h3>Genres</h3>
      <ul v-if="get(data, 'results.length')">
        <li v-for="item in data!.results" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </aside>

    <main>main</main>
  </section>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr;
}

/* header */
.container header {
  grid-column: 1 / 3;
  grid-row: 1;
  display: flex;
}

.container header input {
  background-image: url('./assets/icons/search.svg');
  background-repeat: no-repeat;
  /* background-position: left; */
  padding-left: 40px;
  border: none;
  flex: 1;
  border: 1px solid black;
  border-radius: 15px;
}
/* end header */

.container aside {
  grid-column: 1;
  grid-row: 2;
}

.container main {
  grid-column: 2;
  grid-row: 2;
}

@media screen and (max-width: 760px) {
  .container main {
    grid-column: 1 / 3;
  }
  .container aside {
    display: none;
  }
}
</style>
