<template>
  <div>
    <p>いいね数 {{ halfNumber }}</p>
    <p>名前 {{ testProp }}</p>
    <button @click="increment()">+1</button>
  </div>
</template>

<script>
export default{
  props: {
    totalNumberProp: {
      type: Number,
      default: 2
    },
    testProp: {
      type: String,
      default: "佐藤"
    }
  },
  data() {
    return {
      totalNumber: this.totalNumberProp
    }
  },
  computed: {
    halfNumber() {
      return this.totalNumber;
    }
  },
  methods: {
    increment: function(){
      this.totalNumber += 1
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>