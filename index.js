// Code your solutions in this file
// Define a function called saturdayFun
function writeCards(names, event) {
    const thankYouCards = [];
  
    for (let i = 0; i < names.length; i++) {
      thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    return thankYouCards;
  }
  
  const names = ["Charlie", "Samip", "Ali"];
  const event = "birthday";
  const thankYouMessages = writeCards(names, event);
  
  for (let i = 0; i < thankYouMessages.length; i++) {
    console.log(thankYouMessages[i]);
  }
  function countDown(number) {
    let i = number;
  
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
  
  const startingNumber = 10;
  countDown(startingNumber);
  