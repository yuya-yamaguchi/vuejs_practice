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
      this.$router.push({ 
        name: "users-id-profile",
        params: { id: 1 }
       })
    }
  }
}
</script>