# TIC TAC TOE

This project is a further path in my [Start2Impact](https://www.start2impact.it/) journey.

It consists in a famous game, **tic-tac-toe**.

**You can try it on [Github Pages](https://mem96.github.io/tic-tac-toe/).**

In case you've been living in a cave until now, I'll briefly explain the rules of this game.

Two players compete for achieving three equal symbols in a row, column or diagonal, by taking turns in putting their symbol, which might be X or O (for convention).

## How to play this version of the game
* Click on the board to draw X.
* Click again to draw O.
* In case you press by mistake, press again to return a blank cell.

A sticker on the side will let you know whose turn it is (aka the one who didn't put the symbol last).

The game is otherwise open for cheating: I chose not to prevent the same player to move twice, nor to check whether the players did the same number (&pm;1) of moves in the end. 

Good that you read this *readme*, so that you know how to cheat in case your opponent is distracted.

When the game is over, a button appears to let you start over.

## A side note on the end of the game

After someone wins or the board is full, the game will be over and the board configuration can't be changed. 

But, since the same action can trigger both X and O, I allowed 4 seconds to be sure the move you made is actually the one you wanted.

Therefore, the winner declaration appears a little late, and still sometimes it is triggered before time. 

(Choose to be X. You'll win even when you don't deserve it if the winner event triggers before it should.)

The interval solution stems from the need to have both X and O drawn by a click, as required from the project. I might change this in the future with a right click for O or forcing the alternance between players.

## Credits
I used a bit of stuff for building this website and I'd like to give credits where owed.

* The background picture (paper page) is from [**Freepik**](https://it.freepik.com/foto/sfondo).
* The fonts used can be found on [**Dafont**](https://www.dafont.com/it/theme.php?cat=601&page=10). Their names are *Header marker* from [Garisman studio](https://garisman.com/) and *Drawing with markers* from [Emily Spadoni](https://www.dafont.com/it/emily-spadoni.d5697). Check out both artists, they made some other cool fonts!
* I made the stickers myself with **Canva** and the board drawing with... **Paint**. Shoutout to [**LunaPic**](https://www3.lunapic.com/editor/), a very useful online editor, that I used to remove the background to both.
* I made my own Favicon using [**Favicon.cc**](https://www.favicon.cc/).

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
