<template>
  <div class="home">
    <div class="search-bar">
      <div class="search-bg">
        <div class="search-icon-container">
          <img src="@/assets/base/首页搜词.png" alt="">
        </div>
        <div>在此输入要搜索的单词或文字</div>
      </div>
    </div>
    <div class="banner-bar">
      <img src="@/assets/base/banner.png" alt="">
    </div>
    <div class="homework-bar">
      <div class="item-container">
        <div class="homework-item">
          <img src="@/assets/base/作业.png" alt="" class="item-icon">
          <div class="item-name">作业</div>
        </div>
        <div class="ver-line"></div>
        <div class="homework-item">
          <img src="@/assets/base/教师推荐.png" alt="" class="item-icon">
          <div class="item-name">教师推荐</div>
        </div>
      </div>
      <div class="homework-line"></div>
    </div>
    <ActivityCard :showTitle=true :showLine=false>推荐活动</ActivityCard>
    <ActivityCard :showTitle=true :showLine=true>金句学习</ActivityCard>
    <router-link to="/textdetail">
      <PlanCard />
    </router-link>
  </div>
</template>

<script>
import ActivityCard from './ActivityCard'
import PlanCard from './PlanCard'

export default {
  name: 'HomePage',
  components: {
    ActivityCard,
    PlanCard
  }
}
</script>

<style scoped>
.home {
  background-color: rgb(4, 145, 39);
}
.search-bar {
  background-color: white;
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-bg {
  background-color: rgba(200, 200, 200, 0.575);
  border-radius: 0.2rem;
  width: 96%;
  height: 4vh;
  margin-top: 2%;
  display: flex;
  align-items: center;
}
.search-bg div {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  color: rgba(140, 140, 140, 1);
}
.search-bg img {
  width: 1rem;
  margin: 0 0.5rem;
}
.search-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner-bar {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.banner-bar img {
  width: 100vw;
  height: 50vw;
}
.homework-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
}
.item-container {
  margin: 1.5rem 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.homework-line {
  background-color: #f0f0f0;
  height: 0.5rem;
  width: 100%;
}
.homework-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 2rem;
}
.homework-item img {
  width: 1rem;
}
.item-name {
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 0.4rem;
}
.ver-line {
  width: 0.1rem;
  background-color: #f0f0f0;
  align-self: stretch;
}
</style>
