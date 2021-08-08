/* Written in p5.js (https://p5js.org/)
 * Under Creative Commons License
 * https://creativecommons.org/licenses/by-sa/4.0/
 * Written by Sankalp Shubham, 29-March-2020
 *
 */


var slider;
var cols = 8; // figure out how to take input
var rows = cols;
var colors = [];
var board = [];
var waiting_time; // Waiting time \
var steps;
var cnv;
var input;
var button;
// monoSynth = new p5.MonoSynth();

fr = 5; // FrameRate
let mySound;
// For sound
// function playSynth() {
//     userStartAudio();

//     let note = random(['D5', 'C5', 'E5', 'A5', 'B5']);
//     // note velocity (volume, from 0 to 1)
//     let velocity = random();
//     // time from now (in seconds)
//     let time = 0;
//     // note duration (in seconds)
//     let dur = 1 / 6;

//     monoSynth.play(note, velocity, time, dur);
// }



function preload() {
    soundFormats('mp3', 'ogg');
    mySound = loadSound('s.wav');
}


// This helps to wait otherwise the dfs would be done in an instant
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Backtracking condition
async function is_attacked(board, row, col, n) {

    await sleep(waiting_time);
    for (let i = 0; i < n; i++) {
        if (board[row][i] > 0)
            return true;
    }
    for (let i = 0; i < n; i++) {
        if (board[i][col] > 0)
            return true;
    }
    for (let p = 0; p < n; p++) {
        for (let q = 0; q < n; q++) {
            if (p + q == row + col) {
                if (board[p][q] > 0)
                    return true;
            }
            if (p - q == row - col) {
                if (board[p][q] > 0)
                    return true;
            }

        }
    }
    return false;
}

// DFS
// async function nqueens(board, N, n) {
//     await sleep(waiting_Amazetime);
//     if (N == 0) {
//         return true;
//     }

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (await is_attacked(board, i, j, n)) {
//                 continue;
//             }
//             board[i][j] = 1;
//             if (board[i][j] == 1) {
//                 // playSynth();
//             }
//             if (await nqueens(board, N - 1, n))
//                 return true;
//             board[i][j] = 0;
//         }
//     }
//     return false;
// }

async function nqueens(board, row, n) {
    await sleep(waiting_time);
    if (row == n) {
        sleep(10000);
        return;
    }

    for (let col = 0; col < n; col++) {
        if (await is_attacked(board, row, col, n)) {
            continue;
        } else {
            board[row][col] = row + 1;
            if (board[row][col] > 0) {
                await nqueens(board, row + 1, n);
            }
            board[row][col] = 0;
        }
    }
}

// // Resizing
function windowResized() {
    cnv = createCanvas(800, 800);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);

}

// This handles the drawing part
function setup() {

    var cnv = createCanvas(800, 800);
    // Input taking
    // input = createInput();
    // input.position(850, height + 80);
    background(255, 255, 255);
    // Button for start
    button = createButton('Amaze me');
    button.position(720, height + 80);
    button.mousePressed(init);
    button.style('width', '400px');
    button.style('height', '50px');


    button = createButton('Click Me to Speed Up!');
    button.position(840, height + 140);
    button.mousePressed(speed);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);

    // Change waiting time using slider

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < cols; j++) {
            board[i][j] = 0;
        }
    }
}

function speed() {
    nqueens(board, 0, rows);
    waiting_time -= 10;
}

function init() {

    rows = round(random(4, 8));
    cols = rows;
    setup();
    nqueens(board, 0, rows);
}

function draw() {

    waiting_time = map(0, mouseX, 20, 40);
    background(255, 255, 255);
    textSize(40);

    text("N = " + rows, 300, height - 60);

    for (let i = 0; i < rows; i++) {

        for (let j = 0; j < cols; j++) {

            // rows = (0, 16, 4, 8);
            factor = rows * 10;


            let x = i * factor + 40;
            let y = j * factor + 40;

            stroke(10);
            if (board[i][j] > 0) {
                let colo = board[i][j];
                fill(225, min(255, 38 + colo * 10), 54);
                rect(x, y, factor, factor);
                noFill();
                fill(255, 100, 100);
                fill(225, 38, 54);
                circle(x + (factor) / 2, y + factor / 2, factor / 2);
                noFill();

            } else {
                // Draws the chessboard
                if ((i + j) % 2 == 0) {
                    fill(255, 206, 158); // Light
                } else {
                    fill(209, 139, 30); // Dark
                }

                rect(x, y, factor, factor);
                noFill();


                prevx = x;
                prevy = y;
            }
        }
    }
    text("speed", 400, 800);

}