<template>
  <div>
    <LikeHeader headerText="Hello">
      <template v-slot:title="slotProps">
        <h2>こんにちは</h2>
        <p>{{ slotProps.user.firstName }}</p>
      </template>
      <h3>はじめまして</h3>
      <template v-slot:number>
        <h3>トータルのいいね数</h3>
        <h4>{{ number }}</h4>
      </template>
    </LikeHeader>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <p>{{ number }}</p>
    <LikeNumber :total-number-prop="number" test-prop="田中" @my-click="incrementNum"></LikeNumber>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import LikeNumber from "./components/LikeNumber.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";

export default {
  data() {
    return{
      number: 10,
      currentComponent: "Home"
    }
  },
  components: {
    LikeHeader,
    LikeNumber,
    Home,
    About
  },
  methods: {
    incrementNum(value){
      return this.number = value;
    }
  }
};
</script>
