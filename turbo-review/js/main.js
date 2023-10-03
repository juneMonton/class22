// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink=' Coke ';
favDrink=favDrink.trim()
console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let str='Bob Duck Dog Apple'
str=str.toLowerCase()
if (str.search('apple')!==-1){
    console.log('yes')
}else{
    console.log('no')
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let random=Math.random()
    if (random<.33){
        return 'rock'
    }else if(random<.66){
        return 'paper'
    }else{
        return 'scissors'
    }
}




// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerchoice){
    let botChoice=rockPaperScissors()
    if((playerchoice==='rock' && botChoice==='scissors')||(playerchoice==='paper' && botChoice==='rock')||(playerchoice==='scissors' && botChoice==='paper')){
        console.log('You won!')

    }else if(playerchoice===botChoice){
        console.log('It\'s a tie!')
    }else{
        console.log('You lose!')
    }
}

checkWin('paper')




//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGameXTimes(arr){
    arr.forEach(choice=>checkWin(choice))
}

console.log(playGameXTimes(['rock','paper','scissors']))