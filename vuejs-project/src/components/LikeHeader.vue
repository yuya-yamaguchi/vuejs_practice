<template>
  <div>
    <p>{{ headerText }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"],
  data(){
    return{
      slotProps:{
        firstName: "花子",
        lastName: "テスト"
      },
      slotProps2:{
        test1: "テスト1",
        test2: "テスト2"
      }
    }
  }
}
</script>

<style scoped>
div {
  font-size: 40px;
  border: 1px solid red;
}
</style>
