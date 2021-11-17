const DECK = [
  {card: "Ace", value: 11, link: "https://upload.wikimedia.org/wikipedia/commons/5/5f/English_pattern_ace_of_clubs.svg"},
  {card: "Ace", value: 11, link: "https://upload.wikimedia.org/wikipedia/commons/0/00/English_pattern_ace_of_diamonds.svg"},
  {card: "Ace", value: 11, link: "https://upload.wikimedia.org/wikipedia/commons/d/d4/English_pattern_ace_of_hearts.svg"},
  {card: "Ace", value: 11, link: "https://upload.wikimedia.org/wikipedia/commons/1/19/English_pattern_ace_of_spades.svg"},
  {card: "Two", value: 2, link: "https://upload.wikimedia.org/wikipedia/commons/3/30/English_pattern_2_of_clubs.svg"},
  {card: "Two", value: 2, link: "https://upload.wikimedia.org/wikipedia/commons/9/99/English_pattern_2_of_diamonds.svg"},
  {card: "Two", value: 2, link: "https://upload.wikimedia.org/wikipedia/commons/2/26/English_pattern_2_of_hearts.svg"},
  {card: "Two", value: 2, link: "https://upload.wikimedia.org/wikipedia/commons/0/0b/English_pattern_2_of_spades.svg"},
  {card: "Three", value: 3, link: "https://upload.wikimedia.org/wikipedia/commons/1/14/English_pattern_3_of_clubs.svg"},
  {card: "Three", value: 3, link: "https://upload.wikimedia.org/wikipedia/commons/2/2c/English_pattern_3_of_diamonds.svg"},
  {card: "Three", value: 3, link: "https://upload.wikimedia.org/wikipedia/commons/0/0f/English_pattern_3_of_hearts.svg"},
  {card: "Three", value: 3, link: "https://upload.wikimedia.org/wikipedia/commons/a/a5/English_pattern_3_of_spades.svg"},
  {card: "Four", value: 4, link: "https://upload.wikimedia.org/wikipedia/commons/c/c0/English_pattern_4_of_clubs.svg"},
  {card: "Four", value: 4, link: "https://upload.wikimedia.org/wikipedia/commons/4/4e/English_pattern_4_of_diamonds.svg"},
  {card: "Four", value: 4, link: "https://upload.wikimedia.org/wikipedia/commons/b/bb/English_pattern_4_of_hearts.svg"},
  {card: "Four", value: 4, link: "https://upload.wikimedia.org/wikipedia/commons/3/34/English_pattern_4_of_spades.svg"},
  {card: "Five", value: 5, link: "https://upload.wikimedia.org/wikipedia/commons/7/74/English_pattern_5_of_clubs.svg"},
  {card: "Five", value: 5, link: "https://upload.wikimedia.org/wikipedia/commons/6/6c/English_pattern_5_of_diamonds.svg"},
  {card: "Five", value: 5, link: "https://upload.wikimedia.org/wikipedia/commons/c/c6/English_pattern_5_of_hearts.svg"},
  {card: "Five", value: 5, link: "https://upload.wikimedia.org/wikipedia/commons/9/9c/English_pattern_5_of_spades.svg"},
  {card: "Six", value: 6, link: "https://upload.wikimedia.org/wikipedia/commons/0/02/English_pattern_6_of_clubs.svg"},
  {card: "Six", value: 6, link: "https://upload.wikimedia.org/wikipedia/commons/4/4e/English_pattern_6_of_diamonds.svg"},
  {card: "Six", value: 6, link: "https://upload.wikimedia.org/wikipedia/commons/d/da/English_pattern_6_of_hearts.svg"},
  {card: "Six", value: 6, link: "https://upload.wikimedia.org/wikipedia/commons/a/ac/English_pattern_6_of_spades.svg"},
  {card: "Seven", value: 7, link: "https://upload.wikimedia.org/wikipedia/commons/6/60/English_pattern_7_of_clubs.svg"}, 
  {card: "Seven", value: 7, link: "https://upload.wikimedia.org/wikipedia/commons/5/5d/English_pattern_7_of_diamonds.svg"}, 
  {card: "Seven", value: 7, link: "https://upload.wikimedia.org/wikipedia/commons/c/cb/English_pattern_7_of_hearts.svg"}, 
  {card: "Seven", value: 7, link: "https://upload.wikimedia.org/wikipedia/commons/d/d1/English_pattern_7_of_spades.svg"},
  {card: "Eight", value: 8, link: "https://upload.wikimedia.org/wikipedia/commons/f/f0/English_pattern_8_of_clubs.svg"},
  {card: "Eight", value: 8, link: "https://upload.wikimedia.org/wikipedia/commons/1/18/English_pattern_8_of_diamonds.svg"}, 
  {card: "Eight", value: 8, link: "https://upload.wikimedia.org/wikipedia/commons/3/3c/English_pattern_8_of_hearts.svg"},
  {card: "Eight", value: 8, link: "https://upload.wikimedia.org/wikipedia/commons/4/4d/English_pattern_8_of_spades.svg"},
  {card: "Nine", value: 9, link: "https://upload.wikimedia.org/wikipedia/commons/1/14/English_pattern_9_of_clubs.svg"},
  {card: "Nine", value: 9, link: "https://upload.wikimedia.org/wikipedia/commons/f/f5/English_pattern_9_of_diamonds.svg"},
  {card: "Nine", value: 9, link: "https://upload.wikimedia.org/wikipedia/commons/2/22/English_pattern_9_of_hearts.svg"},
  {card: "Nine", value: 9, link: "https://upload.wikimedia.org/wikipedia/commons/f/f0/English_pattern_9_of_spades.svg"},
  {card: "Ten", value: 10, link: "https://upload.wikimedia.org/wikipedia/commons/4/48/English_pattern_10_of_clubs.svg"},
  {card: "Ten", value: 10, link: "https://upload.wikimedia.org/wikipedia/commons/d/da/English_pattern_10_of_diamonds.svg"},
  {card: "Ten", value: 10, link: "https://upload.wikimedia.org/wikipedia/commons/b/bb/English_pattern_10_of_hearts.svg"},
  {card: "Ten", value: 10, link: "https://upload.wikimedia.org/wikipedia/commons/d/da/English_pattern_10_of_spades.svg"},
  {card: "Jack", value: 10, link: "https://upload.wikimedia.org/wikipedia/commons/8/80/English_pattern_jack_of_clubs.svg"},
  {card: "Jack", value: 10, link: "https://upload.wikimedia.org/wikipedia/commons/1/16/English_pattern_jack_of_diamonds.svg"},
  {card: "Jack", value: 10, link: "https://upload.wikimedia.org/wikipedia/commons/5/56/English_pattern_jack_of_hearts.svg"}, 
  {card: "Jack", value: 10, link: "https://upload.wikimedia.org/wikipedia/commons/4/4f/English_pattern_jack_of_spades.svg"},
  {card: "Queen", value: 10, link: "https://upload.wikimedia.org/wikipedia/commons/b/b3/English_pattern_queen_of_clubs.svg"},
  {card: "Queen", value: 10, link: "https://upload.wikimedia.org/wikipedia/commons/4/4f/English_pattern_queen_of_diamonds.svg"},
  {card: "Queen", value: 10, link: "https://upload.wikimedia.org/wikipedia/commons/9/9d/English_pattern_queen_of_hearts.svg"},
  {card: "Queen", value: 10, link: "https://upload.wikimedia.org/wikipedia/commons/c/ca/English_pattern_queen_of_spades.svg"},
  {card: "King", value: 10, link: "https://upload.wikimedia.org/wikipedia/commons/3/3e/English_pattern_king_of_clubs.svg"},
  {card: "King", value: 10, link: "https://upload.wikimedia.org/wikipedia/commons/1/1c/English_pattern_king_of_diamonds.svg"},
  {card: "King", value: 10, link: "https://upload.wikimedia.org/wikipedia/commons/1/14/English_pattern_king_of_hearts.svg"},
  {card: "King", value: 10, link: "https://upload.wikimedia.org/wikipedia/commons/f/f1/English_pattern_king_of_spades.svg"}
];

$("#deal, #stand, #hit, #split, #double-down").prop("disabled", true);

//Place bet//
var playerChips = 1000,
    betAmount = 0;
$("#white-chip").click(function() {
  if (betAmount < playerChips + betAmount && playerChips - 1 >= 0) {
    betAmount += 1;
    playerChips -= 1;
    $("#player-chips").html(playerChips);
    $("#bet-amount").html(betAmount);
  }  
})
$("#red-chip").click(function() {
  if (betAmount < playerChips + betAmount && playerChips - 5 >= 0) {
    betAmount += 5;
    playerChips -= 5;
    $("#player-chips").html(playerChips);
    $("#bet-amount").html(betAmount);
  }  
})
$("#green-chip").click(function() {
  if (betAmount < playerChips + betAmount && playerChips - 25 >= 0) {
    betAmount += 25;
    playerChips -= 25;
    $("#player-chips").html(playerChips);
    $("#bet-amount").html(betAmount);
  }  
})
$("#blue-chip").click(function() {
  if (betAmount < playerChips + betAmount && playerChips - 50 >= 0) {
    betAmount += 50;
    playerChips -= 50;
    $("#player-chips").html(playerChips);
    $("#bet-amount").html(betAmount);
  }  
})
$("#black-chip").click(function() {
  if (betAmount < playerChips + betAmount && playerChips - 100 >= 0) {
    betAmount += 100;
    playerChips -= 100;
    $("#player-chips").html(playerChips);
    $("#bet-amount").html(betAmount);
  }  
})
$("#bet").click(function() {
  if (betAmount > 0) {
    $(".chip, #bet").prop("disabled", true);
    $("#deal").prop("disabled", false);
  } else {
    $("#alerts").html(" Make a bet to start the game.");
  }
})

var backOfCard = $("<img width=160px height=240px>").addClass("back-of-card");
var dealerLabel = $("<p id='dealer-label'></p>").text("DEALER");
var hiddenCard;

//Deal cards//
var dealerCards = [],
    playerCards = [],
    dealerBlackjack = 0,
    playerBlackjack = 0,
    removedCards = [];
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
  //Shuffle cards if necessary//
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

//Stand//
$("#stand").click(function() {
  if (handIsSplit == true) {
    splitHandsEvaluated++;
    if (splitHandsEvaluated == 1) {
      evaluateHand();
      $("#player-cards").empty();
      for (let i = 0; i < secondHand.length; i++) {
        let img = $("<img width=160px height=240px>");
        img.attr("src", secondHand[i].link).appendTo("#player-cards");
      }
      $("#split-hand-cards").empty();
      for (let i = 0; i < playerCards.length; i++) {
        let img = $("<img width=160px height=240px>");
        img.attr("src", playerCards[i].link).appendTo("#split-hand-cards");
      }
      saveFirstHandValue = playerHandValue;
      playerCards = secondHand;
    } else {
      evaluateHand();
      dealerTurn();
    }
  } else {
    evaluateHand();
    dealerTurn();
  }
})

//Hit//
$("#hit").click(function() {
  $("#double-down, #split").prop("disabled", true);
  let drawCard = DECK[Math.floor(Math.random() * DECK.length)];
  playerCards.push(drawCard);
  removedCards.push(drawCard);
  let img = $("<img width=160px height=240px>");
  img.attr("src", drawCard.link).appendTo("#player-cards");
  DECK.splice(DECK.indexOf(drawCard), 1);
  evaluateHand(); 
})

//Split pairs//
var handIsSplit = false,
    firstHand = [],
    secondHand = [],
    saveBetAmount = 0;
$("#split").click(function() {
  handIsSplit = true;
  playerChips -= betAmount;
  saveBetAmount = betAmount;
  $("#bet-amount").html(betAmount);
  $("#player-chips").html(playerChips);
  $("#split, #double-down").prop("disabled", true);
  firstHand.push(playerCards[0]);
  secondHand.push(playerCards[1]);
  for (let i = 0; i < 2; i++) {
    let drawCard = DECK[Math.floor(Math.random() * DECK.length)];
    playerCards.push(drawCard);
    removedCards.push(drawCard);
    DECK.splice(DECK.indexOf(drawCard), 1);
  }
  firstHand.push(playerCards[2]);
  secondHand.push(playerCards[3]);
  $("#player-cards").empty();
  for (let i = 0; i < firstHand.length; i++) {
    let img = $("<img width=160px height=240px>");
    img.attr("src", firstHand[i].link).appendTo("#player-cards");
  }
  for (let i = 0; i < secondHand.length; i++) {
    let img = $("<img width=160px height=240px>");
    img.attr("src", secondHand[i].link).appendTo("#split-hand-cards");
  }
  playerCards = firstHand;
  if (firstHand[0].card == "Ace" && secondHand[0].card == "Ace") {
    evaluateHand();
    if (playerHandValue < 21) {
      splitHandsEvaluated++;
      $("#player-cards").empty();
      for (let i = 0; i < secondHand.length; i++) {
        let img = $("<img width=160px height=240px>");
        img.attr("src", secondHand[i].link).appendTo("#player-cards");
      }
      $("#split-hand-cards").empty();
      for (let i = 0; i < playerCards.length; i++) {
        let img = $("<img width=160px height=240px>");
        img.attr("src", playerCards[i].link).appendTo("#split-hand-cards");
      }
      saveFirstHandValue = playerHandValue;
      playerCards = secondHand;
    }
    evaluateHand();
  } else {
    evaluateHand();
  }  
})

//Double down//
$("#double-down").click(function() {
  playerChips -= betAmount;
  betAmount *= 2;
  let drawCard = DECK[Math.floor(Math.random() * DECK.length)];
  playerCards.push(drawCard);
  removedCards.push(drawCard);
  let img = $("<img width=160px height=240px>");
  img.attr("src", drawCard.link).appendTo("#player-cards");
  DECK.splice(DECK.indexOf(drawCard), 1);
  evaluateHand();
  if (playerHandValue < 21) {
    dealerTurn();
  }
})

//Evaluate player's hand//
var playerHandValue = 0,
    splitHandsEvaluated = 0,
    saveSecondHandValue = 0;
var evaluateHand = function() {
  playerHandValue = 0;
  let numOfAces = 0;
  for (let i = 0; i < playerCards.length; i++) {
    playerHandValue += playerCards[i].value;
    if (playerCards[i].card == "Ace") {
      numOfAces++;
    }
  }
  for (let i = 0; i < numOfAces; i++) {
    if (playerHandValue > 21) {
      playerHandValue -= 10;
    }
  }
  if (playerHandValue > 21) {
    if (handIsSplit == true) {
      splitHandsEvaluated++;
      if (splitHandsEvaluated == 1) {
        $("#player-cards").empty();
        for (let i = 0; i < secondHand.length; i++) {
          let img = $("<img width=160px height=240px>");
          img.attr("src", secondHand[i].link).appendTo("#player-cards");
        }
        $("#split-hand-cards").empty();
        for (let i = 0; i < playerCards.length; i++) {
          let img = $("<img width=160px height=240px>");
          img.attr("src", playerCards[i].link).appendTo("#split-hand-cards");
        }
        saveFirstHandValue = playerHandValue;
        playerCards = secondHand;
      } else if (splitHandsEvaluated == 2) {
        saveSecondHandValue = playerHandValue;
        dealerTurn();
      }
    } else {
      dealerTurn();
    }
  } else if (playerHandValue == 21) {
    if (handIsSplit == true) {
      splitHandsEvaluated++;
      if (splitHandsEvaluated == 1) {
        $("#player-cards").empty();
        for (let i = 0; i < secondHand.length; i++) {
          let img = $("<img width=160px height=240px>");
          img.attr("src", secondHand[i].link).appendTo("#player-cards");
        }
        $("#split-hand-cards").empty();
        for (let i = 0; i < playerCards.length; i++) {
          let img = $("<img width=160px height=240px>");
          img.attr("src", playerCards[i].link).appendTo("#split-hand-cards");
        }
        saveFirstHandValue = playerHandValue;
        playerCards = secondHand;
      } else if (splitHandsEvaluated == 2) {
        saveSecondHandValue = playerHandValue;
        dealerTurn();
      }
    } else {
      dealerTurn();
    }
  } else if (playerHandValue < 21 && handIsSplit == true && splitHandsEvaluated == 1 && firstHand[0].card == "Ace" && secondHand[0].card == "Ace") {
    splitHandsEvaluated++;
    saveSecondHandValue = playerHandValue;
    dealerTurn();
  }
}

//Evaluate dealer's hand//
var saveFirstHandValue = 0,
    dealerHandValue = 0,
    evaluatedDealerHand = false;
var dealerTurn = function() {
  backOfCard.hide();
  hiddenCard.show();
  dealerLabel.hide();
  if (evaluatedDealerHand == false) {
    dealerHandValue = 0;
    let dealerNumOfAces = 0;
    let dealerSoftAces = 0;
    for (let i = 0; i < dealerCards.length; i++) {
      dealerHandValue += dealerCards[i].value;
      if (dealerCards[i].card == "Ace") {
        dealerNumOfAces++;
      }
    }
    //If the FIRST TWO cards are aces, make one a soft ace before evaluating all cards//
    if (dealerNumOfAces == 2 && dealerSoftAces == 0) {
      dealerHandValue -= 10;
      dealerSoftAces++;
    }
    while (dealerHandValue < 17) {
      let drawCard = DECK[Math.floor(Math.random() * DECK.length)];
      dealerCards.push(drawCard);
      removedCards.push(drawCard);
      let img = $("<img width=160px height=240px>");
      img.attr("src", drawCard.link).appendTo("#dealer-cards");
      DECK.splice(DECK.indexOf(drawCard), 1);
      dealerHandValue += drawCard.value;
      if (drawCard.card == "Ace") {
        dealerNumOfAces++;
      }
      if (dealerHandValue > 21 && dealerNumOfAces - dealerSoftAces > 0) {
        dealerHandValue -= 10;
        dealerSoftAces++;
      }
    }
    evaluatedDealerHand = true;
  }
  if (playerBlackjack > 0) {
    if (dealerBlackjack > 0) {
      $("#alerts").append(" Tie: both players have blackjack.");
      playerChips += betAmount;
    } else {
      $("#alerts").append(" Blackjack!");
      playerChips += betAmount + (betAmount * 1.5);
    }
  } else if (playerHandValue <= 21) {
    if (dealerBlackjack > 0) {
      $("#alerts").append(" You lose: dealer has blackjack.");
    } else if (playerHandValue > dealerHandValue) {
      $("#alerts").append(" You win!");
      playerChips += betAmount * 2;
    } else if (playerHandValue == dealerHandValue) {
      $("#alerts").append(" Tie");
      playerChips += betAmount;
    } else if (playerHandValue < dealerHandValue && dealerHandValue > 21) {
      $("#alerts").append(" You win: dealer busted!");
      playerChips += betAmount * 2;
    } else {
      $("#alerts").append(" You lose.");
    }
  } else {
    $("#alerts").append(" You lose: bust!");
  }
  if (handIsSplit == true && splitHandsEvaluated == 2) {
    splitHandsEvaluated = 0;
    playerHandValue = saveFirstHandValue;
    betAmount = saveBetAmount;
    dealerTurn();
  } else {
    $("#bet, .chip").prop("disabled", false);
    $("#stand, #hit, #split, #double-down").prop("disabled", true);
    betAmount = 0;
    $("#bet-amount").html(betAmount);
    $("#player-chips").html(playerChips);
    handIsSplit = false;
    firstHand = [];
    secondHand = [];
  }
}
