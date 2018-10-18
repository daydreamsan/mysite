<template>
  <div class="activity-card">
    <div class="card-title" v-if="showTitle">
      <slot />
    </div>
    <div class="card-content">
      <img src="" alt="">
    </div>
    <div class="card-line" v-if="showLine"></div>
  </div>
</template>

<script>
export default {
  name: 'ActivityCard',
  props: {
    showTitle: {
      type: Boolean,
      default: false,
      required: true
    },
    showLine: {
      type: Boolean,
      default: true,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
.activity-card {
  background-color: white;
  width: 100vw;
}
.card-title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  font-weight: bolder;
  padding: 1rem 1rem;
}
.card-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0.5rem;
  box-sizing: border-box;
}
.card-line {
  background-color: #f0f0f0;
  height: 0.3rem;
  width: 100vw;
  margin-top: 0.5rem;
}
.card-content img {
  background-color: rgb(248, 209, 209);
  border-radius: 0.6rem;
  width: 96vw;
  height: 45vw;
}
</style>
