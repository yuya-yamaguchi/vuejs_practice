<template>
  <div class="home">
    <h3>Home</h3>
    <button @click="toUsers">Usersページへ行く</button>
  </div>
</template>

<script>
export default{
  methods: {
    toUsers() {
      this.$router.push({ path: "/users/2" })
    }
  }
}
</script>