<template>
  <div id="app">
    <router-view class="content" />
    <div class="tab-container">
      <router-link to="/">
        <div class="tab-item" @click="changeIndex(0)">
          <img src="@/assets/base/首页.png" alt="" class="tab-icon">
          <div class="tab-title">首页</div>
        </div>
      </router-link>
      <router-link to="/textbook">
        <div class="tab-item" @click="changeIndex(1)">
          <img src="@/assets/base/教材.png" alt="" class="tab-icon">
          <div class="tab-title">课程</div>
        </div>
      </router-link>
      <router-link to="/discovery">
        <div class="tab-item" @click="changeIndex(2)">
          <img src="@/assets/base/发现.png" alt="" class="tab-icon">
          <div class="tab-title">发现</div>
        </div>
      </router-link>
      <router-link to="/mine">
        <div class="tab-item" @click="changeIndex(3)">
          <img src="@/assets/base/我的.png" alt="" class="tab-icon">
          <div class="tab-title">我的</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    changeIndex (idx) {
      console.log(idx)
    }
  }
}
</script>

<style scoped>
#app {
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
}
.content {
  flex-grow: 1;
  overflow: scroll;
}
.tab-container {
  border-top: 0.01rem solid #f0f0f0;
  height: 7vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.tab-item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.tab-item img {
  margin-top: 0.3rem;
  width: 1.3rem;
}
.tab-title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
}
.tab-item-highlight {
  color: aquamarine;
}
.tab-item-normal {
  color: #8b8b8b;
}
</style>
