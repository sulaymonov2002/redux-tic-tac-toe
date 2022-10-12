function winnerReducer(state = "", action) {
  switch (action.type) {
    case "winner/x":
      return "X";

    case "winner/o":
      return "O";

    case "winner/draw":
      return "Draw";

    default:
      return state; 
  }
}

export default winnerReducer;
