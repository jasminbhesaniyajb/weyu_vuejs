<template>
  <div class="point-card pa-2 rounded-lg">
    <v-icon>mdi-twitter</v-icon>
    <div class="text-center">
      <h3 class="purple--text text--darken-3 font-weight-bold mb-0 mt-0">
        {{ pointsData.point }}
      </h3>
      <h4 class="font-weight-bold mt-0 text--purple">Points</h4>
      <p class="text-caption mb-2">{{ pointsData.title }}</p>
    </div>
    <v-btn depressed block outlined class="purple--text text--darken-3 rounded-lg">Go</v-btn>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    pointsData: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
  },
});
</script>
<style lang="scss" scoped>
.point-card {
  border: 2px solid #acababb3;
}
</style>
