'use strict'

const dice_img = document.querySelector('.dice-img');
const roll_dice = document.querySelector('.roll-dice');
const player_0_score = document.querySelector('.player-0-score');
const player_1_score = document.querySelector('.player-1-score');
const c_scr_0 = document.querySelector('.c-scr-0');
const c_scr_1 = document.querySelector('.c-scr-1');
const block_1 = document.querySelector('.block-1');
const block_2 = document.querySelector('.block-2');
const hold_game = document.querySelector('.hold-game');
const newGame = document.querySelector('.new');

player_0_score.textContent = 0;
player_1_score.textContent = 0;


let score = [0, 0];
let current_player = 0;
dice_img.classList.add('hide');

let current_score = 0;
let playing = true;

//switch player
const switchPlayer = function () {
    //set current player score to 0
    document.querySelector(`.c-scr-${current_player}`).textContent = 0;
    //set other player current score to zero
    current_score = 0;

    //if current player is 0 then change to 1 and vice versa
    current_player = (current_player === 0) ? 1 : 0;
    if (current_player == 0) {
        block_1.classList.add('active-player');
        block_2.classList.remove('active-player');
    } else {
        block_2.classList.add('active-player');
        block_1.classList.remove('active-player');
    }
}

roll_dice.addEventListener('click', function () {

    if (playing) {
        //create random images
        const dice_no = Math.trunc(Math.random() * 6) + 1;

        //display dice 
        dice_img.src = `dice-${dice_no}.png`;
        dice_img.classList.remove('hide');

        if (dice_no != 1) {
            current_score += dice_no;
            document.querySelector(`.c-scr-${current_player}`).textContent = current_score;
        } else {
            switchPlayer();
        }
    }

});

hold_game.addEventListener('click', function () {
    if (playing) {
        //1. add current score to player score
        score[current_player] += current_score;
        document.querySelector(`.player-${current_player}-score`).textContent = score[current_player];

        //if score greater than 100 current player wins
        if (score[current_player] >= 100) {
            playing = false;
            document.querySelector(`.block-${current_player + 1}`).classList.add('bg');
            dice_img.classList.add('hide');
        }


        //switch player
        switchPlayer();
    }
})


newGame.addEventListener('click', function () {
    if (block_1.classList.contains('bg')) {
        block_1.classList.remove('bg');
    }
    if (block_2.classList.contains('bg')) {
        block_2.classList.remove('bg');
    }
    if (block_1.classList.contains('active-player')) {}
    if (block_2.classList.contains('active-player')) {
        block_2.classList.remove('active-player');
        block_1.classList.add('active-player');
    }
    player_0_score.textContent = 0;
    player_1_score.textContent = 0;
    current_player = 0;
    current_score = 0;
    c_scr_0.textContent = 0;
    c_scr_1.textContent = 0;
    dice_img.classList.add('hide');
    playing = true;
})