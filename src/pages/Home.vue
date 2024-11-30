<template>
  <div class="main">
    <div class="main_container">
      <div class="header">
        <img src="@/assets/images/logo.png" alt="logo">
      </div>
      <div class="main_content">
        <h2>ПОДАРОЧНЫЙ СЕРТИФИКАТ</h2>
<!--        <h6>ПОДАРИ ВТОРОЙ ПОЛОВИНКЕ СЧАСТЬЕ</h6>-->
      </div>
      <div class="gift_card_block">
        <div class="card">
          <img src="@/assets/images/Group75.png" alt="gift">
        </div>
        <div class="btn" :class="{'btn-active': activeBtn}" @mousedown="activeBtn = true" @mouseup="changeStyle">КУПИТЬ СЕРТИФИКАТ</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: false,
    }
  },
  methods: {
    changeStyle() {
      this.activeBtn = false;
      setInterval(() => {
        this.$router.push({ path: `/config` });
      }, 300)
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/images/8777536.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  padding: 40px 0;
}

.main_container {
  width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header img {
  width: 120px;
}

.main_content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-top: 32px;
}

.main_content h2 {
  font-size: 96px;
  color: rgb(255, 255, 255);
  line-height: 100%;
  margin: 0;
}

.main_content h6 {
  font-size: 24px;
  line-height: 100%;
  margin: 0;
  color: rgb(31, 158, 138);
}

.gift_card_block {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 120px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50px;
  backdrop-filter: blur(8px);
  box-sizing: border-box;
  padding: 48px;
  margin-top: 64px;
  border: 2px solid #fff;
}

.card {
  width: 40%;
}

.card img {
  width: 100%;
  transform: rotate3d(-1, -1, -1, 45deg) translateY(-20px);
  filter: drop-shadow(-4px 4px 8px rgba(0, 0, 0, 0.4));
}

.btn {
  box-sizing: border-box;
  padding: 48px;
  border-radius: 50%;
  background: #333;
  width: 240px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  color: #fff;
  border: 2px solid #ffffff;
  box-shadow: 0 0 0 12px #333;
  cursor: pointer;
  transition: 0.3s;
}

.btn-active {
  background: #ffffff;
  border: none;
  box-shadow: 0 0 0 12px #ffffff;
  color: #333;
}
</style>