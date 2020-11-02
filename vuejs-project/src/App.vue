<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>{{ number }}</p>
    <LikeNumber :total-number-prop="number" test-prop="田中" @my-click="incrementNum"></LikeNumber>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import LikeNumber from "./components/LikeNumber.vue";

export default {
  data() {
    return{
      number: 10
    }
  },
  components: {
    LikeHeader,
    LikeNumber
  },
  methods: {
    incrementNum(value){
      return this.number = value;
    }
  }
};
</script>
