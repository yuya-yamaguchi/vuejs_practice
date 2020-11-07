<template>
  <div id="nav">
    <router-link to="/" active-class="link--active">Home</router-link> |
    <router-link to="/about" active-class="link--active">About</router-link> | 
    <router-link to="/users/1/posts" active-class="link--active">Users</router-link>
  </div>
  <router-view/>
</template>

<style scoped>
.link--active {
  font-weight: bold;
}
</style>