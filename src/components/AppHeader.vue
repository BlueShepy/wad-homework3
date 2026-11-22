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


nav a {
    font-size: 20px;
    font-weight: normal;
}

.site-header {
  background-color: #263449;
  color: white;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Trebuchet MS", sans-serif;
}

h1 {
  margin: 1;
  font-size: 24px;
}

nav {
  display: flex;
  gap: 25px;
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