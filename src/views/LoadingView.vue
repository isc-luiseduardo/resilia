<template>
  <div :class="{ loader: true}">
    <div class="loader-body">
        <div>
            <h1>Starting
            <div class="dots"><span class="dot z"></span><span class="dot f"></span><span class="dot s"></span><span class="dot t"><span class="dot l"></span></span></div>
            </h1>
        </div>
        <div class="mosaic-loader">
            <div class="cell d-0"></div>
            <div class="cell d-1"></div>
            <div class="cell d-2"></div>
            <div class="cell d-3"></div>
            <div class="cell d-1"></div>
            <div class="cell d-2"></div>
            <div class="cell d-3"></div>
            <div class="cell d-4"></div>
            <div class="cell d-2"></div>
            <div class="cell d-3"></div>
            <div class="cell d-4"></div>
            <div class="cell d-5"></div>
            <div class="cell d-3"></div>
            <div class="cell d-4"></div>
            <div class="cell d-5"></div>
            <div class="cell d-6"></div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router';
import store from '../plugins/vuex'

export default {
  name: "LoadingScreen",
  props: ["isLoading"],
  methods: {
    initDots() {
        let $ = (e) => document.querySelector(e);
        let dots = $(".dots");

        function animate(element, className) {
        element.classList.add(className);
        setTimeout(() => {
            element.classList.remove(className);
            setTimeout(() => {
            animate(element, className);
            }, 500);
        }, 2500);
        }

        // Execution
        // =========
        animate(dots, "dots--animate");
    },
    animate(element, className) {

    }
  },
  computed: {
  },
  async mounted() {
    //Start animation
    this.initDots();

    let firebaseToken = "";

    try
    {
      this.$messaging.getToken({ vapidKey: 'BGZasBFlO6pxmqx_Ofc2TxPRR0kMxc2vj1uMARI931LVk73NCHs_hbxc9cM9NmiUumzKl1YfYJBhc7DHcz4QkJo' })
      .then((currentToken) => {
        if(currentToken) {
          firebaseToken = currentToken;
          //Initialize the push notifications server
          const result = axios({
            method: 'post',
            url: 'http://resilia.retronomicon.com.mx/api/Notifications',
            headers: {'Content-Type' : 'application/json' },
            data: firebaseToken
          }).then((response) => {
              //Save user at VueX
              store.commit('setUser', response.data);
              //Go home screen
              router.push('/home'); 
          }).catch((e) => {
            console.log("Http call failed! ", e);
          });
        } else {
          console.log("No registrarion token. Ask permission.");
        }
      }).catch((err) => {
        console.log("Error when retrieving the token: ", err);
      })  
    }
    catch(e)
    {
      console.log(e);
    }
  }
};

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");

h2 {
  display: block;
  color: black;
  font-weight: 400;
  text-align: center;
}

.loader-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  margin: 0;
  font-family: "Lato";
  font-weight: 300;
  font-size: 24px;
  background: white;
}

.mosaic-loader {
  --cell-size: 64px;
  --cell-spacing: 1px;
  --border-width: 1px;
  --cells: 4;
  --total-size: calc(var(--cells) * (var(--cell-size) + 2 * var(--cell-spacing)));
  display: flex;
  flex-wrap: wrap;
  width: var(--total-size);
  height: var(--total-size);
}
.mosaic-loader > .cell {
  --cell-color: white;
  flex: 0 0 var(--cell-size);
  margin: var(--cell-spacing);
  background-color: transparent;
  box-sizing: border-box;
  border: var(--border-width) solid var(--cell-color);
  animation: 1.5s ripple ease infinite;
}
.mosaic-loader > .cell.d-1 {
  animation-delay: 100ms;
}
.mosaic-loader > .cell.d-2 {
  animation-delay: 200ms;
}
.mosaic-loader > .cell.d-3 {
  animation-delay: 300ms;
}
.mosaic-loader > .cell.d-4 {
  animation-delay: 400ms;
}
.mosaic-loader > .cell.d-5 {
  animation-delay: 500ms;
}
.mosaic-loader > .cell.d-6 {
  animation-delay: 600ms;
}
.mosaic-loader > .cell:nth-child(1) {
  --cell-color: #d4aee0;
}
.mosaic-loader > .cell:nth-child(2) {
  --cell-color: #8975b4;
}
.mosaic-loader > .cell:nth-child(3) {
  --cell-color: #64518a;
}
.mosaic-loader > .cell:nth-child(4) {
  --cell-color: #565190;
}
.mosaic-loader > .cell:nth-child(5) {
  --cell-color: #44abac;
}
.mosaic-loader > .cell:nth-child(6) {
  --cell-color: #2ca7d8;
}
.mosaic-loader > .cell:nth-child(7) {
  --cell-color: #1482ce;
}
.mosaic-loader > .cell:nth-child(8) {
  --cell-color: #05597c;
}
.mosaic-loader > .cell:nth-child(9) {
  --cell-color: #b2dd57;
}
.mosaic-loader > .cell:nth-child(10) {
  --cell-color: #57c443;
}
.mosaic-loader > .cell:nth-child(11) {
  --cell-color: #05b853;
}
.mosaic-loader > .cell:nth-child(12) {
  --cell-color: #19962e;
}
.mosaic-loader > .cell:nth-child(13) {
  --cell-color: #fdc82e;
}
.mosaic-loader > .cell:nth-child(14) {
  --cell-color: #fd9c2e;
}
.mosaic-loader > .cell:nth-child(15) {
  --cell-color: #d5385a;
}
.mosaic-loader > .cell:nth-child(16) {
  --cell-color: #911750;
}

@keyframes ripple {
  0% {
    background-color: transparent;
  }
  30% {
    background-color: var(--cell-color);
  }
  60% {
    background-color: transparent;
  }
  100% {
    background-color: transparent;
  }
}

h1 {
  font-family: "Open Sans", -apple-system, "Segoe UI", sans-serif;
  font-size: 50px;
  font-weight: bold;
  color: #212121;
  box-sizing: border-box;
}

.dots {
  display: inline-flex;
}
.dots--animate .dot.z {
  -webkit-animation: scale 0.8s 0.2s forwards;
          animation: scale 0.8s 0.2s forwards;
}
.dots--animate .dot.f, .dots--animate .dot.s {
  -webkit-animation: right 0.5s forwards;
          animation: right 0.5s forwards;
}
.dots--animate .dot.l {
  -webkit-animation: rightDown 0.4s 0.1s forwards linear, drop 2s 0.4s forwards linear;
          animation: rightDown 0.4s 0.1s forwards linear, drop 2s 0.4s forwards linear;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #212121;
  border-radius: 10px;
  position: relative;
  margin-left: 6px;
}
.dot.z {
  position: absolute;
  transform: scale(0);
}
@-webkit-keyframes scale {
  100% {
    transform: scale(1);
  }
}
@keyframes scale {
  100% {
    transform: scale(1);
  }
}
.dot.f, .dot.s {
  transform: translateX(0px);
}
@-webkit-keyframes right {
  100% {
    transform: translateX(16px);
  }
}
@keyframes right {
  100% {
    transform: translateX(16px);
  }
}
.dot.t {
  background: transparent;
}
.dot .l {
  margin-left: 0;
  position: absolute;
  top: 0;
  left: 0;
}
@-webkit-keyframes rightDown {
  50% {
    top: 4px;
    left: 16px;
  }
  100% {
    top: 12px;
    left: 24px;
  }
}
@keyframes rightDown {
  50% {
    top: 4px;
    left: 16px;
  }
  100% {
    top: 12px;
    left: 24px;
  }
}
@-webkit-keyframes drop {
  100% {
    transform: translate(70px, calc(35px + (60vh)));
  }
}
@keyframes drop {
  100% {
    transform: translate(70px, calc(35px + (60vh)));
  }
}

.fadeout {
  animation: fadeout 5s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>