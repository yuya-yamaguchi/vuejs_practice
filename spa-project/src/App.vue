<template>
  <div id="nav">
    <router-view name="header"/>
    <router-link to="/about" active-class="link--active">About</router-link> | 
    <router-view/>
  </div>
</template>

<style scoped>
.link--active {
  font-weight: bold;
}
</style>