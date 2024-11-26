<template>
  <div class="main">
    <h2>КОНФИГУРАТОР ПОДАРОЧНОЙ КАРТЫ</h2>
    <div class="main_content">
      <div class="left_side">
        <div class="card">
          <img src="@/assets/images/logo.png" alt="logo">
          <h3 class="nominal_card">СЕРТИФИКАТ НА СУММУ<br>{{nominalCard}}</h3>
          <p class="card_number">0000 0000 0000 0000</p>
        </div>
        <div class="form_full">
          <div class="background">
            <p>ДАННЫЕ ДЛЯ ОТПРАВКИ</p>
            <form class="form">
              <div class="inputs_radio">
                <div class="form_input">
                  <input type="radio" id="self" name="radio" value="false">
                  <label for="radio">Себе</label>
                </div>
                <div class="form_input">
                  <input type="radio" id="other" name="radio" value="екгу">
                  <label for="radio">Другому человеку</label>
                </div>
              </div>
              <div class="inputs_inputs">
                <div class="input_label">
                  <label for="name">Имя</label>
                  <input name="name" id="name" type="text" placeholder="Введите имя"/>
                </div>
                <div class="input_label">
                  <label for="mail">Email</label>
                  <input name="mail" id="mail" type="email" placeholder="Email"/>
                </div>
                <div class="input_label">
                  <label for="text">Сообщение</label>
                  <input name="text" id="text" type="text" placeholder="Сообщение для получателя" />
                </div>
              </div>
              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      </div>
      <div class="right_side">
        <div class="background">
          <p>ВЫБЕРИТЕ ЦВЕТ ФОНА ИЛИ ФОНОВУЮ КАРТИНКУ</p>
          <div class="background_color">
            <input type="color" @input="changeColor">
            <div class="fonts_image">
              <img src="@/assets/images/bg1.jpg" alt="picture" @click="changeColor">
              <img src="@/assets/images/bg2.jpg" alt="picture" @click="changeColor">
              <img src="@/assets/images/bg3.jpg" alt="picture" @click="changeColor">
              <img src="@/assets/images/bg4.jpg" alt="picture" @click="changeColor">
              <img src="@/assets/images/bg5.jpg" alt="picture" @click="changeColor">
              <img src="@/assets/images/bg6.jpg" alt="picture" @click="changeColor">
            </div>
          </div>
        </div>
        <div class="background">
            <p>ВЫБЕРИТЕ ЦВЕТ ШРИФТА КАРТЫ</p>
            <input type="color" @input="changeColorText">
        </div>
        <div class="background">
          <p>ВЫБЕРИТЕ НОМИНАЛ</p>
          <div class="inputs">
            <div class="radio_inputs">
              <input type="radio" name="1000" value="1 000" @input="addNominal">
              <label for="1000">1000Р</label>
            </div>
            <div class="radio_inputs">
              <input type="radio" name="1000" value="5 000" @input="addNominal">
              <label for="5000">5000Р</label>
            </div>
            <div class="radio_inputs">
              <input type="radio" name="1000" value="10 000р" @input="addNominal">
              <label for="10000">10000Р</label>
            </div>
            <div class="radio_inputs">
              <input type="radio" name="1000" value="15 000" @input="addNominal">
              <label for="15000">15000Р</label>
            </div>
            <div class="radio_inputs">
              <input type="radio" name="1000" value="20 000" @input="addNominal">
              <label for="20000">20000Р</label>
            </div>
            <div class="radio_inputs">
              <input type="radio" name="1000" value="25 000" @input="addNominal">
              <label for="25000">25000Р</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundCard: null,
      nominalCard: 1000,
    }
  },
  methods: {
    changeColor(event) {
      this.backgroundCard = event.target.value || event.target.src;
    },
    changeBackgroundCard(newValue) {
      let card = document.querySelector('.card')
      if (event.target.src) {
        card.style.backgroundImage = `url(${newValue})`;
        card.style.backgroundPosition = 'center';
        card.style.backgroundSize = '100% 100%';
        card.style.backgroundRepeat = 'no-repeat';
      } else {
        document.querySelector('.card').style.background = `${newValue}`;
      }
    },
    changeColorText(event) {
      document.querySelector('.card_number').style.color = `${event.target.value}`;
      document.querySelector('.nominal_card').style.color = `${event.target.value}`;
    },
    addNominal(event) {
      this.nominalCard = event.target.value;
    }
  },
  watch: {
    backgroundCard(newValue) {
      this.changeBackgroundCard(newValue);
    }
  }
}
</script>

<style scoped>
.main {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fbfbfb;
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
  padding: 80px 0;
}
.main h2 {
  line-height: 100%;
  margin-bottom: 80px;
  font-size: 48px;
  color: #333;
}
.main_content {
  width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 80px;
}
.left_side {
  width: 100%;
  box-sizing: border-box;
  //padding: 32px;
  //background: #fff;
  //border-radius: 16px;
  //border: 2px solid #e8e8e8;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.card {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 24px;
  position: relative;
  box-sizing: border-box;
  padding: 24px;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: all 200ms ease;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.card img {
  width: 64px;
}
.card_number {
  position: absolute;
  bottom: 24px;
  right: 24px;
  font-size: 24px;
  line-height: 100%;
  color: #333;
}
.nominal_card {
  font-size: 24px;
  text-align: end;
  position: absolute;
  top: 24px;
  right: 24px;
}
.right_side {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.background {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  padding: 32px;
  background: #fff;
  border-radius: 16px;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.background p {
  text-align: center;
  color: #333;
  font-size: 16px;
}
.background_color {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 32px;
}
.background input {
  width: 72px;
  height: 36px;
  border: none;
  background: transparent;
}
.fonts_image {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
}
.fonts_image img {
  width: 120px;
  border-radius: 8px;
  cursor: pointer;
}
.inputs {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
}
.radio_inputs {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}
.form_full {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.inputs_radio {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
}
.form_input {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.form_input input {
  width: 24px;
  cursor: pointer;
}
.inputs_inputs {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.input_label {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-sizing: border-box;
}
.inputs_inputs input {
  box-sizing: border-box;
  padding: 12px;
  width: 100%;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
}
.inputs_inputs label {
  font-size: 14px;
}
form button {
  box-sizing: border-box;
  padding: 12px 0;
  border: none;
  border-radius: 8px;
  color: white;
  background: blue;
  cursor: pointer;
}
</style>