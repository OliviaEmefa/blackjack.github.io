//1.Create two variables ,firstCard and secondCard.
//Set their values to a random number between 2-11

// 2.Create a variable, sum, and set it to the sum of the two cards
//let firstCard = 11
//let secondCard = 10

//let sum = firstCard + secondCard
//console.log(sum)

//if(sum<21) {
     //console.log("do you want to draw a new card?🙂")
//}
//else if (sum===21){
   // console.log("Woohoo! you've got blackjack?💃🏻")
////}
///else if (sum >21){
   // console.log(" Ooopss!You are out of the game!😭")
//}


//Check if the person is old enough to enter the nightclub (18)
//log a suitable message to the console in both cases

//let age = 16

//if (age<18) {
   // console.log("Go back home little one!!")
//}
    //else {

        //console.log("Welcome!")
   // }


//if less than 18 -> "Go back home little one!"
//else ->"Welcome!"



//Check if the person is eligible for a birthday card from the king! (100)

//let age = 120

//if (age<100) {
  //  console.log("Not elegible")

//}
 //else if (age===100) {
   // console.log("Where is your birthday card from the king")

//}else{
  //  console.log("Not elegible , you have already gotten one")

//}

//if less than 100 ->"Not elegible"
// else if exactly 100 ->"Where is your birthday card from the king"
//else                  ->"Not elegible , you have already gotten one"



//Write the conditional according to these rules:

//if less than or equal to 20 ->"Do you want to draw a new card?"
//elsee if exactly 21->"Wohoo!You've got Blackjack!"
//else ->"You're out of the game!"

let newfirstCard = 15
let newsecondCard = 10
let cards= [newfirstCard,newsecondCard] //array
let newSum = newfirstCard + newsecondCard 
let hasblackJack = false
let isAlive =true
let message = ""


let sumEl = document.querySelector("#sum-el")

//store the card-el in a variable called cardEl
let cardEl = document.querySelector("#card-el")




let messsageEl = document.querySelector("#message-el")


//start game function
function renderGame() {
   cardEl.textContent= "Cards:  " +  cards[0]+" "   +  cards[1]
   sumEl.textContent= "Sum: " + newSum
  if (newSum <= 20) {
    message = "Do you want to draw a new card?🙂"
   }
   else if(newSum === 21){
   message = "Wohoo!You've got Blackjack!💃🏻"
   hasblackJack = true
   }
   else {
    message = "You're out of the game!😭"
   isAlive =false
   }
   //Display the message in messageEl using messageEl.textContent
   messsageEl.textContent = message
}

function newCard() {
   console.log("Drawing a new card from the deck")
   // Create a card variable , and hard code its value to a number (2-11)
   let card= 3
//Add the new card to the sum variable
 newSum += card
// Call startGame()
renderGame()
}


//log it out!!!!!
//console.log(message)

//CASHOUT!!!
//console.log(hasblackJack)

//console.log(isAlive)


