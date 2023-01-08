
// Function to generate a random card number between the min and max numbers passed through

function getRandomCard(min, max) {
    return Math.floor(Math.random() * (max  - min + 1) ) + min;
    
};

// Function to deal a card.

function dealACard(player, value) {
    player.hand += value;
}

// Function to compare dealer and user hand when dealer hand is between 17 -21

function compareHands(user, dealer) {
    if (user.hand > dealer.hand) {
        return user.win = true
    } else {
       return dealer.win = true
    };
};

// Function to end game

function thanksMsg(user) {
    alert("Thank you for playing")
    user.playAgain = false;

};

const startMessage = "Welcome to a simple game of BlackJack. The rules are simple. You will be dealt a card between 4 and 21. If you get 21, you win. If not, the dealer is dealt a card between 2 and 11. You then have the choice to 'hit' (deal a card between 2 and 11) or stay (no card is dealt). \n Ready? Here we go ";

const win = "You win! Do you want to play again?";

// Begin Game

if (confirm("Do you want to play BlackJack") == true) {
    dealFirstCard();

} else {
    console.log("User Cancelled");

};

// Game function

function dealFirstCard() {
    do {
        var dealer = {hand: 0, win: false};
        var user = {hand: 0, win: false, playAgain: true};

        // Initial Deal

        dealACard(user, getRandomCard(4,21));

        if(user.hand == 21) {

            if (confirm(win)) {
                dealFirstCard();

            } else {
                console.log("User Cancelled");
                return;

            }
        };
        
        console.log("Round 1 - User hand is " + user.hand);

        // Initial Dealer Deal

        do {
            console.log(`User = ${user.win} + Dealer = ${dealer.win}`)

            if (dealer.hand < 17) {
                dealACard(dealer, getRandomCard(2,11));
                
            };

            if(dealer.hand > 21) {
                if (confirm(`Dealer is Bust!! Their hand is ${dealer.hand}`)) {
                    dealFirstCard();

                } else {
                    console.log("User Cancelled");
                    thanksMsg(user);
                    break;

                };

            } else if (dealer.hand == 21) {
                if(confirm(`Dealer wins!! Their hand is ${dealer.hand}`)) {
                    dealFirstCard();

                } else {
                    console.log("User Cancelled");
                    thanksMsg(user);
                    break;

                };

            } else if (dealer.hand >= 17 && dealer.hand < 21) {
                compareHands(user, dealer);

                if (user.win == true) {
                    if (confirm("You win!! Your hand is " + user.hand + " and the dealer's hand is " + dealer.hand)) {
                        dealFirstCard();

                    } else {
                        console.log("Cancelled");
                        thanksMsg(user);
                        break;

                    };

                } else {
                    if (confirm("Dealer wins. Their hand is " + dealer.hand + " and your hand is " + user.hand)) {
                        dealFirstCard();

                    } else {
                        console.log("Cancelled");
                        thanksMsg(user);
                        break;

                    };

                };

            };

            console.log("Dealer hand is " + dealer.hand);
            
            if (user.playAgain == false) {
                break;
            }

            // Choose to hit or stay

            if(user.hand > 21) {
                if(confirm(`Bust!! Your hand is ${user.hand}. Do you want to play again?`)) {
                    dealFirstCard();

                } else {
                    thanksMsg(user);
                    break;

                };

            } else if (user.hand == 21) {
                if (confirm(win + "your hand is " + user.hand)) {
                    dealFirstCard();
    
                } else {
                    console.log("User Cancelled");
                    thanksMsg(user);
                    break;
    
                };

            } else {
                if(confirm(`Your hand is ${user.hand} and the Dealer's is  ${dealer.hand}. Will you hit or stay?`)) {
                    dealACard(user, getRandomCard(2, 11))
                    console.log("'Hit Me'");
                    console.log("User hand is " + user.hand);

                } else {
                    user.hand + 0;
                    console.log("User stays");

                };

            };

            if(user.hand > 21) {
                if(confirm(`Bust!! Your hand is ${user.hand}. Do you want to play again?`)) {
                    dealFirstCard();

                } else {
                    thanksMsg(user);
                    break;

                };

            };

        } while (user.playAgain == true);

    } while (user.playAgain == true);

};