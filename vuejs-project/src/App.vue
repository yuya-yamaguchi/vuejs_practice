<template>
  <div>
    <LikeHeader headerText="LikeHeaderProps">
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
    <div style="padding: 5rem">
      <h2>イベントのフォーム</h2>
      <EventTitle v-model="eventData.title"></EventTitle>
      <EventTitle :value="eventData.title"
                  @input="eventData.title = $event.target.value"></EventTitle>
      <label for="maxNumber">最大人数</label>
      <input
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber">
      <p>{{ eventData.maxNumber }}</p>
      <label for="maxNumber">主催者</label>
      <input
        id="host"
        type="string"
        v-model.trim="eventData.host">
      <p>{{ eventData.host }}</p>
      <label for="detail">イベントの内容</label>
      <textarea name="detail" id="" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <pre>{{ eventData.detail }}</pre>
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>
      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
      <label for="20">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target">
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>
      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price">
      <label for="paid">有料</label>
      <p>{{ eventData.price }}</p>
      <p>開催場所</p>
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">{{ location }}</option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>

  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import LikeNumber from "./components/LikeNumber.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import EventTitle from "./components/EventTitle.vue";

export default {
  data() {
    return{
      number: 10,
      currentComponent: "Home",
      locations: ["東京", "大阪", "福岡"],
      eventData: {
        title: "aa",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料",
        location: "東京"
      }
    }
  },
  components: {
    LikeHeader,
    LikeNumber,
    Home,
    About,
    EventTitle
  },
  methods: {
    incrementNum(value){
      return this.number = value;
    }
  }
};
</script>
