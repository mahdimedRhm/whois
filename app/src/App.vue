<script setup>
import NavBar from './components/NavBar.vue'
import About from './components/About.vue'
</script>

<template>
  <NavBar />
  <main >
    <div class="bg-neutral-900">
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
