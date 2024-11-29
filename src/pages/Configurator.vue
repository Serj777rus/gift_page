<template>
  <div class="main">
<!--    <h2>КОНФИГУРАТОР ПОДАРОЧНОЙ КАРТЫ</h2>-->
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
            <form class="form" @submit.prevent="sendData">
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
                  <input v-model="form.name" name="name" id="name" type="text" placeholder="Введите имя" required />
                </div>
                <div class="input_label">
                  <label for="mail">Email</label>
                  <input v-model="form.mail" name="mail" id="mail" type="email" placeholder="Email" required />
                </div>
                <div class="input_label">
                  <label for="text">Сообщение</label>
                  <input v-model="form.text" name="text" id="text" type="text" placeholder="Сообщение для получателя" required/>
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
            <input type="color" v-model="form.background" @input="changeColor">
            <div class="fonts_image">
              <img src="@/assets/images/bg1.jpg" alt="picture" @click="changeColor">
              <img src="@/assets/images/bg2.jpg" alt="picture" @click="changeColor">
              <img src="@/assets/images/bg3.jpg" alt="picture" @click="changeColor">
              <img src="@/assets/images/bg4.jpg" alt="picture" @click="changeColor">
              <img src="@/assets/images/bg5.jpg" alt="picture" @click="changeColor">
              <img src="@/assets/images/bg6.jpg" alt="picture" @click="changeColor">
            </div>
            <div class="container">
              <div class="header">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                  <path d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <p>Выберите файл для загрузки</p>
              </div>
              <input id="file" type="file" @input="getFile">
            </div>
          </div>
          <div class="shrift_nominal">
            <div class="shrift">
              <p>ВЫБЕРИТЕ ЦВЕТ ШРИФТА КАРТЫ</p>
              <input type="color" v-model="textCard" @input="changeColorText">
            </div>
            <div class="nominal">
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
    </div>
  </div>
  <div class="loader_container" v-if="loader">
    <div class="loader">
      <div class="cube">
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
      </div>
    </div>
  </div>
  <div class="thanks_container" v-if="thanks">
    <div class="thanks_main">
      <h2>Спасибо за приобретенный сертификат!</h2>
      <p>Он уже доставлен на указанную почту и готов к использованию. Спасибо что выбрали нас!</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      backgroundCard: null,
      textCard: null,
      nominalCard: 1000,
      form: {
        name: '',
        mail: '',
        text: ''
      },
      file: null,
      loader: false,
      thanks: false,
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
        card.style.background = `${newValue}`;
      }
    },
    changeColorText(event) {
      document.querySelector('.card_number').style.color = `${event.target.value}`;
      document.querySelector('.nominal_card').style.color = `${event.target.value}`;
    },
    addNominal(event) {
      this.nominalCard = event.target.value;
      this.form.nominal = event.target.value;
    },
    getFile(event) {
      let card = document.querySelector('.card')
      const file = event.target.files[0];
      this.file = file;
      console.log(this.file);
      let linkFile = window.URL.createObjectURL(file);
      card.style.backgroundImage = `url(${linkFile})`;
      card.style.backgroundPosition = 'center';
      card.style.backgroundSize = '100% 100%';
      card.style.backgroundRepeat = 'no-repeat';
    },
    async sendData() {
      // let formData = new FormData();
      // formData.append('file', this.file);
      // formData.append('name', this.form.name);
      // formData.append('mail', this.form.mail);
      // formData.append('text', this.form.text);
      // formData.append('nominal', this.form.nominal);
      // formData.append('background', this.form.background);
      // formData.append('textColor', this.form.textCard);
      // for (let [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }
      const card = document.querySelector('.card')
      const canvas = await html2canvas(card, {scale: 1.5})
      const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
      this.loader = true
      this.form.name = '';
      this.form.email = '';
      this.form.text = ''
      try {
        const response = await axios.post('api/datas', {image: dataUrl, name: this.form.name, mail: this.form.mail, text: this.form.text});
        if (response.status === 200) {
          this.loader = false;
          console.log(response);
          this.thanks = true;
          setTimeout(() => {
            this.thanks = false
          }, 2500)
        }
      } catch(error) {
        console.log(error);
      }
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
  background: #E8E8E8;
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
  padding: 40px 0;
}
.main h2 {
  line-height: 100%;
  margin-bottom: 40px;
  font-size: 36px;
  color: #333;
}
.main_content {
  width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
}
.left_side {
  width: 100%;
  box-sizing: border-box;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  height: fit-content;
  display: flex;
  gap: 16px;
}
.background {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 32px;
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
  font-weight: 500;
}
.background_color {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
}
.background input {
  width: 10%;
  height: 36px;
  border: none;
  background: transparent;
}
.fonts_image {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
}
.fonts_image img {
  width: 128px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
}
.shrift_nominal {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 32px;
}
.shrift {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}
.nominal {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}
.inputs {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}
.radio_inputs {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}
.radio_inputs input {
  width: 16px;
}
.radio_inputs label {
  font-size: 12px;
  line-height: 100%;
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
  gap: 0;
}
.form_input input {
  width: 16px;
  cursor: pointer;
}
.form_input label {
  font-size: 12px;
  text-align: center;
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
  font-size: 12px;
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
.container {
  height: 100%;
  width: 300px;
  border-radius: 10px;
  box-shadow: 4px 4px 30px rgba(0, 0, 0, .2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 5px;
  background-color: rgba(0, 110, 255, 0.041);
  position: relative;
}

.header {
  flex: 1;
  width: 100%;
  border: 2px dashed royalblue;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.header svg {
  height: 100px;
}

.header p {
  text-align: center;
  color: black;
}

.footer {
  background-color: rgba(0, 110, 255, 0.075);
  width: 100%;
  height: 40px;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: black;
  border: none;
}

.footer svg {
  height: 130%;
  fill: royalblue;
  background-color: rgba(70, 66, 66, 0.103);
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.205);
}

.footer p {
  flex: 1;
  text-align: center;
}

#file {
  display: flex;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
}
/* From Uiverse.io by Deri-Kurniawan */
.loader_container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
}
.loader {
  perspective: 600px;
  width: 100px;
  height: 100px;
}

.cube {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: rotate 4s linear infinite;
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #3498db, #e74c3c);
  opacity: 0.8;
  border: 0.5px solid #fff;
  border-radius: 25%;
}

.face:nth-child(1) {
  transform: rotateX(90deg) translateZ(50px);
}

.face:nth-child(2) {
  transform: rotateX(-90deg) translateZ(50px);
}

.face:nth-child(3) {
  transform: translateZ(50px);
}

.face:nth-child(4) {
  transform: rotateY(90deg) translateZ(50px);
}

.face:nth-child(5) {
  transform: rotateY(-90deg) translateZ(50px);
}

.face:nth-child(6) {
  transform: rotateY(180deg) translateZ(50px);
}

@keyframes rotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }

  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
.thanks_container {
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.7);
  font-family: "Montserrat", sans-serif;
}
.thanks_main {
  width: 700px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  padding: 32px;
}
.thanks_main h2 {
  font-size: 48px;
  font-weight: 700;
  color: #333333;
  text-align: center;
}
.thanks_main p {
  font-size: 24px;
  font-weight: 300;
  color: #333333;
  text-align: center;
}
</style>