<template>
  <p>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
    <LikeNumber></LikeNumber>
  </p>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import LikeNumber from "./components/LikeNumber.vue";

export default {
  components: {
    LikeHeader,
    LikeNumber
  }
};
</script>
