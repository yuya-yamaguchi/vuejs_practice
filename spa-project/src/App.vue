<template>
  <div id="nav">
    <router-view name="header"/>
    <router-link to="/about" active-class="link--active">About</router-link> | 
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style scoped>
.link--active {
  font-weight: bold;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>