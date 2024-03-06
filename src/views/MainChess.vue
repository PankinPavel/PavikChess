<script setup>
import { Board } from "@/views/classes/Board.js";
import {Pawn} from "@/views/classes/figures/Pawn.js";
import FigureImage from "@/views/FigureImage.vue";
import darkBoard from "@images/chessItems/board_dark.svg"
import lightBoard from "@images/chessItems/board_light.svg"
import {setFigurePlace} from "@/utils/utils.js";
import { Game } from "@/views/classes/Game.js";





onMounted(() => {
  Board.createChessboard()
  Game.startGame()
})
</script>

<template>
  <div class="main">
    <div class="main-board" id="chessboard">
    </div>
  </div>
</template>

<style>
.main{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.main-board {
  width: 400px;
  height: 400px;
}


.piece {
  width: 47px;
  height: 47px;
  vertical-align: top;
  display: inline-block;
  margin: auto;
}

.piece-img {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.piece img {
  display: block;
}

.piece.white {
  background: url("@images/chessItems/board_light.svg");
}

.piece.black {
  background: url("@images/chessItems/board_dark.svg");

}
</style>