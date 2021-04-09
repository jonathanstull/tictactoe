Game {
  board: a board value object { 
    spaces: {
      space1: single-variable coordinates, eventually,
      space2: single-variable coordinates, eventually,
      space3: single-variable coordinates, eventually,
      space4: single-variable coordinates, eventually,
      space5: single-variable coordinates, eventually,
      space6: single-variable coordinates, eventually,
      space7: single-variable coordinates, eventually,
      space8: single-variable coordinates, eventually,
      space9: single-variable coordinates, eventually,
      }
      (.marked) a method to mark spaces
      something else that's a method
  players: {
    player1: {
      name = name,
      id = 01,
      wins = 0
    }
    player2: {
      name = name,
      id = 01,
      wins = 0
    }
    (.markedBy) method to pass the currentPlayer value to the game or board
    (.show) to show the player value to the players
    Player constructor
    }
    (.toggle) method to toggle between players with a Boolean setting variable currentPlayer
    a method to pass the current player value to the game or board
    something else that's a method
  something else that's a method
  a Boolean to test each turn for victory conditions or ties
  something else that's a method
  }
  board constructor
}