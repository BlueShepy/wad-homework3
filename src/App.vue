<template>
  <div id="app">
    <AppHeader />

    <main>
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: "Trebuchet MS", sans-serif;
  background-color: #f4f4f4;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  width: 100%;
  max-width: 800px;
  margin: 30px auto;
  padding: 0 15px;
  box-sizing: border-box;
}
</style>