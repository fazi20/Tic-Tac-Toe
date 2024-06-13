import { useState } from 'react'
import './App.css'
import Block from './Components/Block'
import Swal from 'sweetalert2'


function App() {

  const [state, setState] = useState(Array(9).fill(null))
  const [currentTurn, SetCurrentTurn] = useState("X")

  const checkWinner = (state: any[]) => {

    const win = [

      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 6],
      [0, 4, 8],
      [2, 4, 6]


    ]
    for (let i = 0; i < win.length; i++) {

      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) return true;

    }
  }
  const checkdraw = (state: any[]) => {

    return state.every(cell => cell !== null)
  }

  const HandleBlockClick = (index: number) => {
    // console.log(index)
    const stateCopy = Array.from(state);
    if (stateCopy[index] !== null) return
    stateCopy[index] = currentTurn;
    SetCurrentTurn(currentTurn == "X" ? "O" : "X")
    setState(stateCopy)

    const win = checkWinner(stateCopy);
    if (win) {
      // alert()
      Swal.fire(`${currentTurn} won the game`);

    }
    const draw = checkdraw(stateCopy);
    if (draw) {
      Swal.fire("Draw");
    }
    console.log(stateCopy)

  }
  return (
    <>
      <h1>TIC-TAC-TOE</h1>


      <div className='Board'>
        <div className='row'>
          <Block onClick={() => HandleBlockClick(0)} value={state[0]} />
          <Block onClick={() => HandleBlockClick(1)} value={state[1]} />
          <Block onClick={() => HandleBlockClick(2)} value={state[2]} />
        </div>
        <div className='row'>
          <Block onClick={() => HandleBlockClick(3)} value={state[3]} />
          <Block onClick={() => HandleBlockClick(4)} value={state[4]} />
          <Block onClick={() => HandleBlockClick(5)} value={state[5]} />
        </div>
        <div className='row'>
          <Block onClick={() => HandleBlockClick(6)} value={state[6]} />
          <Block onClick={() => HandleBlockClick(7)} value={state[7]} />
          <Block onClick={() => HandleBlockClick(8)} value={state[8]} />
        </div>

      </div>
    </>
  )
}

export default App


