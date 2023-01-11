// <!-- DOM Manipulation
// - If we want our websites to be interactive, we want it to change on the fly
//  - So when the user clicks a button we need to respond to it by changing the content
// - DOM catalogs our web page into individual objects which we can select and manipulate
// -->
 
let secretNumber = Math.floor(Math.random() * 100) + 1;
let score = 20;
let highScore = 0
console.log(secretNumber)
 
 
// Selecting the check button
let c=document.querySelector(".check");
// Add event listener to the check button
c.addEventListener("click",()=>{
 
    // fetch the user input from the DOM
    let guess = Number(document.querySelector(".guess").value)
    // console.log(guess)
    // handling the cases
    // 1. invalid/no input
   
    if(!guess){
        alert("Enter a valid value!")
    }
 
    // correct guess
    else if(secretNumber === guess){
        //change background color to #60b347
        document.querySelector("body").style.backgroundColor="#60b347"
       
        // Display the message -> You guessed it right!
       document.querySelector(".message").innerHTML="You guessed it right!"
 
        // Display the secret number
         document.querySelector(".number").textContent = secretNumber
 
 
        // Check for new high score and display it
       document.querySelector(".highscore").innerHTML=score
 
       
    }
 
    // guess is less than random number
 
    else if(secretNumber > guess){
        if(score>0){
        // Display You lost if score goes below 0
         score=score-1
          document.querySelector(".message").innerHTML="Too low!"
       
        // Otherwise Diplay the message Too Low, Display the score and decrement the score  
        
        }
 
        else{
          document.querySelector(".message").innerHTML="You Lost!"
          document.querySelector("body").style.backgroundColor="red"
      document.querySelector("h1").textContent = "Answer is:"
       document.querySelector(".number").textContent = secretNumber
        }      
    }
 
    // guess greater than random number
    else if(secretNumber < guess){
 
        if(score>0){
             // Display You lost if score goes below 0
        score=score-1
          document.querySelector(".message").innerHTML="Too high!"
 
        // Otherwise Diplay the message Too High, Display the score and decrement the score  
        
        }
        else{
             document.querySelector(".message").innerHTML="You Lost!"
          document.querySelector("body").style.backgroundColor="red"
      document.querySelector("h1").textContent = "Answer is:"
       document.querySelector(".number").textContent = secretNumber
        }      
    }
})
