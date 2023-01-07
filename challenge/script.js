// Player Hand
// Dealer Hand

// Deal player number between 4 - 21
    // If 21 then player wins
    // Else deal dealer a number between 2 - 11

// Player decides to hit or stay
    // If user hits, add number between 2 - 11
        // If player total is over 21, they lose
        // If player total is 21, they stay

// When player stays deal dealer a number between 2 - 11
    // If dealer hand is over 21, they go bust
    // If dealer hand is under 17, deal again
    // If dealer hand is between 17 and 21 (inclusive), stay

// When dealer and player are stay, whoever is closest to 21 wins

// Function that adds a number if condition is met
    // Check if it is a player or dealer
    // Pass the dealer or player hand value through it and add a card if met 

var dealer = {
    hand: 0,
};

var user = {
    hand: 0,
};

var initialDealMessage = "Welcome to BlackJack. Click confirm to start. You can track your hand in the console";

var hitMessage = `Your hand is ${user.hand} and the dealer's hand is ${dealer.hand}. Do you want to hit or stay?`;


confirm(initialDealMessage);

// User's first deal

if (confirm(hitMessage) == true) {

        dealACard(user, getRandomCard(4,21));

};

// Dealers first deal

dealACard(dealer, getRandomCard(2,11));

console.log("Your hand is " + user.hand + " and the dealer's hand is " + dealer.hand);




function getRandomCard(min, max) {

    return Math.floor(Math.random() * (max  - min + 1) ) + min;
    
}

function dealACard(player, value) {
    player.hand += value;
}

/*
dealACard(user, getRandomCard(4,21));
dealACard(user, getRandomCard(2,11));
dealACard(dealer, getRandomCard(2,11));
*/