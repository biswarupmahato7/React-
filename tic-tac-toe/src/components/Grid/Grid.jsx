import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import isWinner from "../../helpers/checkWinner";

function Grid({ numberOfCard }) {
  const [board, setBoard] = useState(Array(numberOfCard).fill(""));
  const [turn, setTurn] = useState(true); //turn ? true(0) , false(X)
  const [winner,setWinner] = useState(null)

  function play(index){
    const updatedBoard = [...board]; 
    if(turn === true){
      updatedBoard[index] = '0'
    }else{
      updatedBoard[index] = 'X'
    }
    const win = isWinner(updatedBoard , turn ? '0' : 'X');
    if(win){
        setWinner(win)

    }
    setBoard(updatedBoard); 
    setTurn(!turn)

  }

  function reset(){
    setTurn(true);
    setWinner(null)
    setBoard(Array(numberOfCard).fill(""))
  }

  return (
    <div className="grid-wrapper">
        {
            winner && (
                <>
                <h1 className="turn"> Winner is {winner}</h1>
                <button className="reset" onClick={reset}>Reset</button>

                </>
                
            )
        }
      <h1 className="turn">Current Turn: { (turn) ? "0" : "X"}</h1>
      <div className="grid">
        {board.map((el, idx) =>(

          <Card gameEnd = {winner ? true : false} key={idx} onPlay={play} player={el} index={idx} />
        ) 
        )}
      </div>
    </div>
  );
}

export default Grid;
