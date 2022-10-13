import GameBoard from "../gameBoard/GameBoard";
import ViewTurn from "../viewTurn/viewTurn";

import "./app.css";
function App() {
  return (
    <div className="d-flex flex-column align-items-center  mt-5 ">
      <GameBoard />
      <div className="mt-3">
        <ViewTurn />
      </div>
    </div>
  );
}

export default App;
