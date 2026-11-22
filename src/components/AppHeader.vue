<template>
  <header class="site-header">
    <h1>THE NEW GRAM</h1>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/signup">Sign up</router-link>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  background-color: #263449;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin: 0;
  font-size: 24px;
}

nav {
  display: flex;
  gap: 20px;
}

a {
  color: white;
  text-decoration: none;
}

a:hover,
a.router-link-exact-active {
  text-decoration: underline;
}
</style>