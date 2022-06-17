<template>
  <div id="app">
    <h1>TIC TAC TOE</h1>
    <div class="grid-container">
      <grid-component @winnerChosen="showWinnerMethod" ref="gridComponent">
      </grid-component>
    </div>
    <div class="showWinner" v-show="showWinner">
      <h2>{{ winnerMessage }}</h2>
      <button id="button" @click="resetGame">Restart</button>
    </div>
  </div>
</template>

<script>
import GridComponent from './components/GridComponent.vue';
export default {
  name: 'app',
  components: {
    GridComponent,
  },
  data() {
    return {
      winner: '',
      winnerMessage: '',
      showWinner: false,
    };
  },
  methods: {
    showWinnerMethod(player) {
      this.winner = player;
      this.showWinner = true;
      if (this.winner !== 'none') {
        this.winnerMessage = `The winner is ${this.winner}`;
      } else {
        this.winnerMessage = `No one wins. Try again.`;
      }
    },
    resetGame() {
      this.$refs.gridComponent.emptyBoard();
      this.winner = '';
      this.showWinner = false;
    },
  },
};
</script>

<style>
@font-face {
  font-family: 'marker';
  src: url('./assets/fonts/header-marker.otf');
}
@font-face {
  font-family: 'thin-marker';
  src: url('./assets/fonts/drawing-with-markers.ttf');
}
#app {
  display: block;
  height: 100vh;
  /**/
  background: url('./assets/squared-paper-texture.jpg');
  background-size: cover;
  font-family: 'marker';
}
h1 {
  margin: auto;
  padding-top: 20px;
  text-align: center;
  font-family: 'marker';
  font-weight: normal;
  font-size: 80px;
}
.grid-container {
  display: flex;
  margin: auto;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
}
.showWinner {
  text-align: center;
  margin: auto;
}
.showWinner > h2 {
  font-family: 'thin-marker';
  font-weight: bolder;
  font-size: 25px;
  margin-bottom: 40px;
}
.showWinner > button {
  font-family: 'marker';
  width: 300px;
  font-size: 25px;
  background-color: rgb(239, 189, 189);
  border: solid 3px black;
  border-radius: 15px;
}
.showWinner > button:hover {
  background-color: rgb(244, 211, 221);
}
</style>
