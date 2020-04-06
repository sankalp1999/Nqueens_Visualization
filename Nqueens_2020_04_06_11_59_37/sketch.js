var slider;
var cols = 8; // figure out how to take input
var rows = cols;
var colors = [];
var board = [];
var waiting_time; // Waiting time 
let monoSynth;
var steps;
monoSynth = new p5.MonoSynth();

fr = 5; // FrameRate
let mySound;
// For sound
function playSynth() {
  userStartAudio();

  let note = random(['D5', 'C5', 'E5', 'A5', 'B5']);
  // note velocity (volume, from 0 to 1)
  let velocity = random();
  // time from now (in seconds)
  let time = 0;
  // note duration (in seconds)
  let dur = 1/6;

  monoSynth.play(note, velocity, time, dur);
}



function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('s.wav');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function is_attacked(board, row, col, n)
{       
  await sleep(waiting_time);
  for (let i = 0; i < n; i++)
    {
        if(board[row][i] == 1)
            return true;
    }
    for (let i = 0; i < n; i++)
    {
        if(board[i][col] == 1)
            return true;
    }
    for (let p = 0; p < n; p++)
    {
        for (let q = 0; q < n; q++)
        {
            if(p + q == row + col)
            {
                if(board[p][q] == 1)
                    return true;
            }
            if(p - q == row - col)
            {
                if(board[p][q] == 1)
                    return true;
            }

        }
    }
    return false;
}

// DFS
async function nqueens(board, N, n)
{ 
  await sleep(waiting_time);
  if (N == 0) 
    {   
      return true;
    }

    for (let i = 0; i < n; i++)
    {
        for (let j = 0; j < n; j++)
        {
            if( await is_attacked(board, i, j, n) )
            {
                continue;
            }
            board[i][j] = 1;
            if(board[i][j] == 1)
            {
            playSynth();
            }
          if (await nqueens(board, N - 1, n))
                return true;
            board[i][j] = 0;
        }
    }
    return false;
}

function setup() {  
 
   // createCanvas(1000,1000);
   createCanvas(windowWidth, windowHeight);
   frameRate(10);
   // Change waiting time using slider
  
   slider = createSlider(0, 50, 100);
   slider.position(100, 700);
   slider.style('width', '100px');

  for(let i = 0; i < rows ; i++)
  {  
    board[i] = [];
     for(let j = 0; j < cols; j++)
     {
       board[i][j] = 0;
     }
  }
    nqueens(board, rows, rows);
  
}

function draw() {
  waiting_time = slider.value();
  print(slider.value());
  for(let i = 0; i < rows ; i++)
  {
  
    for(let j = 0; j < cols ; j++)
      {
        let f2 = 200;
        
        let factor = rows * 10;
        let x = i * factor + f2;
        let y = j * factor + f2/4;
        stroke(10);
        if(board[i][j] == 1)
        {
          fill(227,38,54);
          rect(x,y,factor,factor);
          noFill();
          fill(255,100,100);
          circle(x + (factor)/2 , y + factor/2, factor/2);  
          noFill();
        }
        else 
        { 
          // Draws the chessboard
          if( (i+j)%2 == 0)
          {
            fill(255, 206, 158); // Light
          }
          else
          {
           fill(209, 139, 30);   // Dark
          }
          
          rect(x,y,factor,factor);
          noFill();
          textSize(15);
        }
      }
  }

}