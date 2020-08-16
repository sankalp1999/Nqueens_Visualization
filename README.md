# Backtracking

You can check the project [here](https://sankalp1999.github.io/Nqueens_Visualization/Nqueens)
UPDATE AUG 2020: I realised that backtracking code can be optimised a lot. It has a lot of repititive work. I will create another version with the better algorithm soon.

## Story behind this project

This project was an attempt to visualize the backtracking algorithms. I finally understood the Nqueens_backtracking algorithm and
how it worked. This was possible due to some GIFs I saw somewhere.

I decided to make the visualization using p5.js which is a Javascript Framework made by [Processing Foundation](https://processing.org/).
I had always wanted to make visualizations and more web apps stuff but there always has been some kind of other college work or
other more programming work. But, this time, I allotted a few days into this and kept Competitive programming on hold(I do it as a hobby but I am not good, it takes a lot of practice.)

I learnt the basics of processing from [The Coding Train](https://www.youtube.com/results?search_query=daniel+shiffman) and the documentation.
Daniel Shiffman's channel is one of the best channels on YouTube for creative coding and programming in general. I got really inspired by him.

## What the hell is Backtracking?

> It is a refined brute force attempt. It can be thought of as a selective tree traversal.

- Backtracking is a form of recursion. If you don't understand recursion, maybe backtracking problems can help you understand it.
- The usual scenario is that you are faced with a number of options, and you must choose one of these. After you make your choice you will get a new set of options; just what set of options you get depends on what choice you made. This procedure is repeated over and over until you reach a final state. If you made a good sequence of choices, your final state is a goal state; if you didn't, it isn't.
- So basically in backtracking we attempt solving a subproblem, and if we don't reach the desired solution, then undo whatever we did for solving that subproblem, and try solving another subproblem.

In short, a Depth First Search generates the whole tree or the State Space. Now, we define some **bounding conditions** or general conditions to decide to go down a subtree/branch or not.

Backtracking helps to reduce the time complexity by a significant factor.

## 8 Queens Problem

> The eight queens puzzle is the problem of placing eight chess queens on an 8×8 chessboard so that no two queens threaten each other; thus, a solution requires that no two queens share the same row, column, or diagonal. The eight queens puzzle is an example of the more general n queens problem of placing n non-attacking queens on an n×n chessboard, for which solutions exist for all natural numbers n with the exception of n = 2 and n =3.                                   
 -Wikipedia.

For n = 8, there are 92 solutions from 64C8 possible combinations. 

To learn more about, backtracking check the following resources.

[HackerEarth Tutorial](https://www.hackerearth.com/practice/basic-programming/recursion/recursion-and-backtracking/tutorial/)
Brilliant

[Backtracking](https://www.cis.upenn.edu/~matuszek/cit594-2012/Pages/backtracking.html)

## Some challenges I faced

- The main challenge was to how to slow down or speed up the visualization which I managed to do to a certain extent.
- Daniel Shiffman's videos helped a lot. Other than that, this thread helped
- I need to practice more of HTML/CSS part 😆
- I still don't understand the async parts of JS. Will update this part in the future.

[What is the JavaScript version of sleep()?](https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep)

Currently, only this project is being hosted 

## Future prospects
- Learn and practice more of JS, HTML, CSS
- Make some modifications in UI of this and maybe try to smoothen animation.
