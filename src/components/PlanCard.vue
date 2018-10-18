<template>
  <div class="plan-card">
    <div class="plan-title">教材学习</div>
    <div class="plan-body">
      <div class="plan-icon">
        <img src="" alt="">
      </div>
      <div class="plan-detail">
        <div class="plan-name">字母-B</div>
        <div class="plan-progress">
          <div class="progress-bar">
            <div class="inner-bar" :style="styleobj"></div>
          </div>
          <div class="progress-cnt"><span class="c-span">0</span><span class="t-span">/ 70</span></div>
        </div>
        <div class="plan-date">创建日期: 2018年10月16日</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlanCard',
  data () {
    return {
      styleobj: {
        width: '30%',
        height: '100%'
      }
    }
  }
}
</script>

<style scoped>
.plan-card {
  width: 100vw;
  background-color: white;
  padding-bottom: 1rem;
}
.plan-title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  font-weight: bolder;
  padding: 1rem 1rem;
}
.plan-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.plan-icon {
  width: 25vw;
  height: 32vw;
  border: 0.1rem solid red;
  margin: 0rem 1rem;
}
.plan-detail {
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
}
.plan-name {
  padding: 0.2rem 0.2rem;
}
.plan-date {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.6rem;
  color: #a0a0a0;
}
.progress-cnt {
  flex-grow: 0;
}
.plan-progress {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0.2rem 1rem 0.2rem 0.5rem;
}
.progress-bar {
  height: 0.2rem;
  flex: 1;
  background-color: #a0a0a0;
  border-radius: 0.1rem;
  margin-right: 1rem;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.inner-bar {
  background-color: rgb(5, 192, 14);
}
.c-span {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  font-weight: bolder;
  color: rgb(224, 60, 10);
  padding-right: 0.4rem;
}
.t-span {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.8rem;
  font-weight: bolder;
  color: gray;
}
</style>
