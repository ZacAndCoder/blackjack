
# Blackjack

To view this project, click [here](https://zacandcoder.github.io/blackjack/).

To reference the rules of the game, click [here](https://bicyclecards.com/how-to-play/blackjack/).

## Description

Using HTML, CSS, JavaScript, and jQuery, I programmed the card game "Blackjack." Note that buttons are "grayed out" or disabled when they cannot be legally clicked. Because of this, even people who do not play Blackjack should be able to understand the game; my program is essentially a Blackjack tutorial. 

To start the game, players must place a bet and click **Deal Cards**. Bets must be greater than zero and less than the amount of chips available, but beyond that, there are no bet limits. The dealer's cards are dealt at the top of the page, and one card is dealt face down. The player's cards are dealt below a dividing black line. On the right-hand side of the page, both the bet amount and the chip amount are displayed. On the left-hand side of the page, all possible moves are shown. 

Players can **stand** to keep their current cards and end the turn, **hit** for another card, **split** their hand if they have two initial cards of the same value, or **double down** to double their bet and receive just one more card. The latter two choices cannot be selected if the player's current bet amount is higher than their chip amount. If a hand is split, the topmost pair is the one currently in play. Once a player ends play for that pair, the second pair will be moved to the top. Remember that split Aces only receive one extra card per hand. 

At the bottom of the page, messages are sometimes shown (e.g., "Shuffled cards," "You lose: Bust!"). These messages will often tell players why they won or lost. Players may need to scroll down to see the messages. Cards are shuffled when half of the deck has been dealt. When a player gets a blackjack, or two initial cards that equal 21, they receive their bet multiplied by 2.5, whereas any other win condition will return their bet multiplied by 2. 

The game ends if players run out of chips. Otherwise, play can go on indefinitely. 

## GIF

![BlackjackGIF](https://user-images.githubusercontent.com/91081344/142252878-bc9551e1-96c2-4d76-aafd-facaa57bbd22.gif)

## Example Code

```
//Deal cards
$("#deal").click(function() {
  $("#player-cards, #dealer-cards, #split-hand-cards").empty();
  dealerCards = [];
  playerCards = [];
  dealerBlackjack = 0;
  playerBlackjack = 0;
  playerHandValue = 0;
  dealerSoftAces = 0;
  saveBetAmount = 0;
  evaluatedDealerHand = false;
  backOfCard.show();
  dealerLabel.show();
  $("#alerts").empty();
  $("#table-decor").empty();
  //Shuffle cards if necessary
  if (DECK.length < 26) {
    for (let i = 0; i < removedCards.length; i++) {
      DECK.push(removedCards[i]);
    }
    removedCards = [];
    $("#alerts").html(" Shuffled cards.");
  }
  for (let i = 0; i < 2; i++) {  
    let drawCard = DECK[Math.floor(Math.random() * DECK.length)];
    dealerCards.push(drawCard);
    removedCards.push(drawCard);
    let img = $("<img width=160px height=240px>");
    img.attr("src", drawCard.link).appendTo("#dealer-cards");
    DECK.splice(DECK.indexOf(drawCard), 1);
    if (dealerCards[1]) {
      hiddenCard = img;
      hiddenCard.hide();
      backOfCard.appendTo("#dealer-cards");
      backOfCard.before(dealerLabel);
    } 
  }
  for (let i = 0; i < 2; i++) {  
    let drawCard = DECK[Math.floor(Math.random() * DECK.length)];
    playerCards.push(drawCard);
    removedCards.push(drawCard);
    let img = $("<img width=160px height=240px>");
    img.attr("src", drawCard.link).appendTo("#player-cards");
    DECK.splice(DECK.indexOf(drawCard), 1);
  }
  $("#deal").prop("disabled", true);
  $("#stand, #hit").prop("disabled", false);
  if (betAmount <= playerChips) {
    $("#double-down").prop("disabled", false);
    if (playerCards[0].card == playerCards[1].card) {
      $("#split").prop("disabled", false);
    }
  }  
  if (dealerCards[0].value + dealerCards[1].value == 21) {
    dealerBlackjack++;
  }
  if (playerCards[0].value + playerCards[1].value == 21) {
    playerBlackjack++;
    dealerTurn();
  }
})
```

This function is executed when the **Deal Cards** button is clicked. First, it clears out the cards on the table and resets all variables. Then, the **backOfCard** element is displayed in place of the dealer's second card. If half of the deck has been dealt, the dealt cards—which have been saved in an array called **removedCards**—are added back to the **DECK** array. This is done by looping through the length of **removedCards** and pushing each array item to the **DECK**. The **removedCards** array is emptied and the message "Shuffled cards" is shown at the bottom of the page.

Next, a loop runs twice to draw two cards for the dealer. The variable **drawCard** is set as equal to a random array item from the **DECK** and then pushed to the **dealerCards** array as well as the **removedCards** array. The **img** variable is declared with the correct size, and it is given the source attribute **drawCard.link**, which contains the link to the drawn card's image. This allows the image to be shown at the top of the page. The selected card is removed from the **DECK** array. If the selected card is the dealer's second drawn card, it is hidden. Another loop repeats most of this process for the *player's* cards.

Additionally, certain buttons are disabled or enabled once cards have been dealt. Players cannot bet or deal cards a second time during their turn. **Hit** and **Stand** buttons are automatically enabled because these options are always available to players if their hand is below 21. If players have at least as many chips as their current bet amount, the **Double Down** and **Split** buttons are enabled, although a split additionally requires that both initial cards have the same value. 

Finally, there are two "if statements" that identify blackjacks. If the dealer has a blackjack, the player still plays as usual because the dealer's blackjack is not yet apparent. However, if the player gets a blackjack, their turn immediately ends and both hands are evaluated. 

## License

This project uses the MIT License.
