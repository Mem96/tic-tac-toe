<template>
    <div class='grid'>
        <div v-for="(n,m) in 3" :key="n.id"> 
            <div v-for="(n,p) in 3" :key="n.id">
                <cell-component @clickOnCell="putSymbol(m,p)" :value="board[m][p]" :fontColor="fontColor[m][p]"></cell-component>
            </div>
        </div>
        <div>
            <img v-show='this.whoseTurn=="X"' class='XTurn' src="../assets/up-to-x.png" alt="Up to X">
            <img v-show='this.whoseTurn=="O"' class='OTurn' src="../assets/up-to-o.png" alt="Up to O">
        </div>
    </div>
</template>

<script>
import CellComponent from './CellComponent.vue'

export default {
    components: {
        CellComponent,
    },
    data(){
        return{
            board: [
                ['','',''],
                ['','',''],
                ['','','']
            ],
            fontColor: [
                ['','',''],
                ['','',''],
                ['','','']
            ],
            stillPlaying: true,
            whoseTurn: '',
            winner: '',
        }
    },
    methods:{
        putSymbol(m,p){
            if (this.stillPlaying){
                if (this.board[m][p] == ''){
                    this.fontColor[m][p] = 'blue';
                    this.board[m][p] = 'X';
                    this.whoseTurn = 'O';
                } else if(this.board[m][p] == 'X') {
                    this.fontColor[m][p]= 'red';
                    this.board[m][p] = 'O';
                    this.whoseTurn = 'X';
                } else {
                    this.board[m][p] = '';
                    this.whoseTurn = 'X';
                }
                console.log(this.board)
                setTimeout(this.checkGameSituation, 3000);
                this.$forceUpdate();
            } else {
                return false;
            }
                
        },
        checkForWin(player){
            // columns
            for (let i=0; i<3; i++){
                if (this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player){
                    this.winner = player;
                    this.$emit('winnerChosen', player)
                    this.stillPlaying = false;
                    this.whoseTurn = '';
                }
            }
            // rows
            for (let i=0; i<3; i++){
                if (this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player){
                    this.winner = player;
                    this.$emit('winnerChosen', player)
                    this.stillPlaying = false;
                    this.whoseTurn = '';
                }
            }
            // diagonals
            if (this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player){
                this.winner = player;
                this.$emit('winnerChosen', player)
                this.stillPlaying = false;
                this.whoseTurn = '';
            }
            if (this.board[0][2] == player && this.board[1][1] == player && this.board[2][0] == player){
                this.winner = player;
                this.$emit('winnerChosen', player)
                this.stillPlaying = false;
                this.whoseTurn = '';
            }
        },
        emptyBoard(){
            for (let i=0; i<3; i++){
                for (let j=0; j<3; j++){
                    this.board[i][j] = '';
                    this.fontColor[i][j] = ''; //maybe unuseful
                    this.$forceUpdate();
                    this.winner = '';
                    this.stillPlaying = true;
                }
            }
        },
        checkGameSituation(){
            this.stillPlaying = false;
            setTimeout(this.checkForWin, 4000, 'X')
            setTimeout(this.checkForWin, 4000, 'O')
            for (let i=0; i<3; i++){
                if (this.board[i].includes('')){ // checks that at least in a row there's an empty cell
                    this.stillPlaying = true;
                }
            }
            if (this.stillPlaying == false){
                if (this.winner == ''){
                    this.$emit('winnerChosen', 'none')
                    this.whoseTurn = '';
                }
            }
        },          
        
    }
}
</script>
<style>
    .grid{
        display: flex;
        text-align: center;
        margin: auto;
        position: relative;
        padding: 0px 45px 15px 40px;
        background-image: url("../assets/grid-background.png");
        background-position: center;
        background-size: 320px 280px;
        background-repeat: no-repeat;
    }
    .XTurn, .OTurn{
        position: absolute;
        width: 20vw;
        max-width: 150px;
        top: 5vh;
    }
    .XTurn{
        left: -15vw;
    }
    .OTurn{
        right: -15vw;
    }
</style>