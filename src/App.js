// App.js

import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [gameToggle, setGameToggle] = useState("unlimited")
  const [char, setChar] = useState('X');
  const [winner, setWinner] = useState('');
  const [nextTurn, setNextTurn] =useState('')
  const [gameMessage, setGameMessage] = useState('');
  const [count, setCount] = useState(1)
  const [drawCells, setDrawCells] = useState(0)
  const [matrix, setMatrix] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);
  const [PlayerOnePoints, setPlayerOnePoints] = useState([]);
  const [PlayerTwoPoints, setPlayerTwoPoints] = useState([])
  const [bestOfGameX, setBestOfGameX] =useState([]);
  const [bestOfGameO, setBestOfGameO] =useState([]);
  const [winningCells, setWinningCells] = useState([]);
  const [timer, setTimer] = useState(3);
  console.log("winner: ", winner)
  console.log("next Turn: ", nextTurn)
  const [gamesPlayed, setGamesPlayed] = useState(0);

  const checkWinner = () =>{
    if(gameToggle==="unlimited"){
      if(matrix[0][0] && matrix[0][0] === matrix[0][1] && matrix[0][1] === matrix[0][2] ) {
        setWinner(matrix[0][0] + " wins")
        setNextTurn(matrix[0][0] + " wins")
        setCount(1);
        setDrawCells(0);
        setWinningCells(['0-0', '0-1', '0-2']);
        setTimer(3)
      }
      else if(matrix[1][0] && matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2] ) {
        setWinner(matrix[1][0] + " wins")
        setNextTurn(matrix[1][0] + " wins")
        setCount(1)
        setDrawCells(0);
        setWinningCells(['1-0', '1-1', '1-2'])
      }
      else if(matrix[2][0] && matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2] ) {
        setWinner(matrix[2][0] + " wins")
        setNextTurn(matrix[2][0] + " wins")
        setCount(1)
        setDrawCells(0);
        setWinningCells(['2-0', '2-1', '2-2'])
      }
      else if(matrix[0][0] && matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0] ) {
        setWinner(matrix[2][0] + " wins")
        setNextTurn(matrix[2][0] + " wins")
        setCount(1)
        setDrawCells(0);
        setWinningCells(['0-0', '1-0', '2-0'])
      }
      else if(matrix[0][1] && matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1] ) {
        setWinner(matrix[2][1] + " wins")
        setNextTurn(matrix[2][1] + " wins")
        setCount(1)
        setDrawCells(0);
        setWinningCells(['0-1', '1-1', '2-1'])
      }
      else if(matrix[0][2] && matrix[0][2] === matrix[1][2] && matrix[1][2] === matrix[2][2] ) {
        setWinner(matrix[2][2] + " wins")
        setNextTurn(matrix[2][2] + " wins")
        setCount(1)
        setDrawCells(0);
        setWinningCells(['0-2', '1-2', '2-2'])
      }
      else if(matrix[0][0] && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {
        setWinner(matrix[2][2] + " wins")
        setNextTurn(matrix[2][2] + " wins")
        setCount(1)
        setDrawCells(0);
        setWinningCells(['0-0', '1-1', '2-2'])
      }
      else if(matrix[0][2] && matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) {
        setWinner(matrix[2][0] + " wins")
        setNextTurn(matrix[2][0] + " wins")
        setCount(1)
        setDrawCells(0);
        setWinningCells(['0-2', '1-1', '2-0'])
      }
      else if(count === 9){
        setWinner("The match is draw")
        setCount(1)
      }
    }
    else if(gameToggle==="bestOfThree" || gameToggle==="bestOfFive"){
      if(matrix[0][0] && matrix[0][0] === matrix[0][1] && matrix[0][1] === matrix[0][2] ) {
        setGamesPlayed(gamesPlayed +1);
        setTimer(3)
        if(matrix[0][0]==="X"){
          setPlayerOnePoints([...PlayerOnePoints, "win"])
          setBestOfGameX([...bestOfGameX, "win"])
          setWinner(`X wins in Match ${gamesPlayed +1}`)
          setChar("O");
          setCount(1);
          setDrawCells(0);
        }
        else{
          setPlayerTwoPoints([...PlayerTwoPoints,"win"])
          setBestOfGameO([...bestOfGameO, "win"])
          setWinner(`O wins in Match ${gamesPlayed+1}`)
          setChar("X")
          setCount(1)
          setDrawCells(0);
        }
        setWinningCells(['0-0', '0-1', '0-2']);
        if ((gameToggle === "bestOfThree" && gamesPlayed < 2) || (gameToggle === "bestOfFive" && gamesPlayed < 4)){
          setTimeout(() => { 
            setWinningCells([]);
            setMatrix([
              ["", "", ""],
              ["", "", ""],
              ["", "", ""]
            ])
          }, 3000);
        }
      }
      else if(matrix[1][0] && matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2] ) {
        setGamesPlayed(gamesPlayed +1)
        setTimer(3)
        if(matrix[1][0]==="X"){
          setPlayerOnePoints([...PlayerOnePoints, "win"])
          setBestOfGameX([...bestOfGameX, "win"])
          setWinner(`X wins in Match ${gamesPlayed +1}`)
          setChar("O")
          setCount(1)
          setDrawCells(0)
        }
        else{
          setPlayerTwoPoints([...PlayerTwoPoints,"win"])
          setBestOfGameO([...bestOfGameO, "win"])
          setWinner(`O wins in Match ${gamesPlayed +1}`)
          setChar("X")
          setCount(1)
          setDrawCells(0)
        }
        setWinningCells(['1-0', '1-1', '1-2']);
        if ((gameToggle === "bestOfThree" && gamesPlayed < 2) || (gameToggle === "bestOfFive" && gamesPlayed < 4)){
          setTimeout(() => {
            setWinningCells([]);
            setMatrix([
              ["", "", ""],
              ["", "", ""],
              ["", "", ""]
            ])
          }, 3000);
        }
      }
    else if(matrix[2][0] && matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2] ) {
      setGamesPlayed(gamesPlayed +1)
      setTimer(3)
      if(matrix[2][0]==="X"){
        setPlayerOnePoints([...PlayerOnePoints, "win"])
        setBestOfGameX([...bestOfGameX, "win"])
        setWinner(`X wins in Match ${gamesPlayed +1}`)
        setChar("O")
        setCount(1)
        setDrawCells(0)
      }
      else{
        setPlayerTwoPoints([...PlayerTwoPoints,"win"])
        setBestOfGameO([...bestOfGameO, "win"])
        setWinner(`O wins in Match ${gamesPlayed +1}`)
        setChar("X")
        setCount(1)
        setDrawCells(0)
      }
      setWinningCells(['2-0', '2-1', '2-2']);
      if ((gameToggle === "bestOfThree" && gamesPlayed < 2) || (gameToggle === "bestOfFive" && gamesPlayed < 4)){
      setTimeout(() => {
        setWinningCells([]);
        setMatrix([
          ["", "", ""],
          ["", "", ""],
          ["", "", ""]
        ])
      }, 3000);
    }
    }
    else if(matrix[0][0] && matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0] ) {
      setGamesPlayed(gamesPlayed +1)
      setTimer(3)
      if(matrix[2][0]==="X"){
        setPlayerOnePoints([...PlayerOnePoints, "win"])
        setBestOfGameX([...bestOfGameX, "win"])
        setWinner(`X wins in Match ${gamesPlayed +1}`)
        setChar("O")
        setCount(1)
        setDrawCells(0)
      }
      else{
        setPlayerTwoPoints([...PlayerTwoPoints,"win"])
        setBestOfGameO([...bestOfGameO, "win"])
        setWinner(`O wins in Match ${gamesPlayed +1}`)
        setChar("X")
        setCount(1)
        setDrawCells(0)
      }
      setWinningCells(['0-0', '1-0', '2-0']);
      if ((gameToggle === "bestOfThree" && gamesPlayed < 2) || (gameToggle === "bestOfFive" && gamesPlayed < 4)){
      setTimeout(() => {
        setWinningCells([]);
        setMatrix([
          ["", "", ""],
          ["", "", ""],
          ["", "", ""]
        ])
      }, 3000);
    }
    }
    else if(matrix[0][1] && matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1] ) {
      setGamesPlayed(gamesPlayed +1)
      setTimer(3)
      if(matrix[2][1]==="X"){
        setPlayerOnePoints([...PlayerOnePoints, "win"])
        setBestOfGameX([...bestOfGameX, "win"])
        setWinner(`X wins in Match ${gamesPlayed +1}`)
        setChar("O")
        setCount(1)
        setDrawCells(0)
      }
      else{
        setPlayerTwoPoints([...PlayerTwoPoints,"win"])
        setBestOfGameO([...bestOfGameO, "win"])
        setWinner(`O wins in Match ${gamesPlayed +1}`)
        setChar("X")
        setCount(1)
        setDrawCells(0)
      }
      setWinningCells(['0-1', '1-1', '2-1']);
      if ((gameToggle === "bestOfThree" && gamesPlayed < 2) || (gameToggle === "bestOfFive" && gamesPlayed < 4)){
      setTimeout(() => {
        setWinningCells([]);
        setMatrix([
          ["", "", ""],
          ["", "", ""],
          ["", "", ""]
        ])
      }, 3000);
    }
    }
    else if(matrix[0][2] && matrix[0][2] === matrix[1][2] && matrix[1][2] === matrix[2][2] ) {
      setGamesPlayed(gamesPlayed +1)
      setTimer(3)
      if(matrix[2][2]==="X"){
        setPlayerOnePoints([...PlayerOnePoints, "win"])
        setBestOfGameX([...bestOfGameX, "win"])
        setWinner(`X wins in Match ${gamesPlayed +1}`)
        setChar("O")
        setCount(1)
        setDrawCells(0)
      }
      else{
        setPlayerTwoPoints([...PlayerTwoPoints,"win"])
        setBestOfGameO([...bestOfGameO, "win"])
        setWinner(`O wins in Match ${gamesPlayed +1}`)
        setChar("X")
        setCount(1)
        setDrawCells(0)
      }
      setWinningCells(['0-2', '1-2', '2-2']);
      if ((gameToggle === "bestOfThree" && gamesPlayed < 2) || (gameToggle === "bestOfFive" && gamesPlayed < 4)){
      setTimeout(() => {
        setWinningCells([]);
        setMatrix([
          ["", "", ""],
          ["", "", ""],
          ["", "", ""]
        ])
      },3000);
    }
    }
    else if(matrix[0][0] && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {
      setGamesPlayed(gamesPlayed +1)
      setTimer(3)
      if(matrix[2][2]==="X"){
        setPlayerOnePoints([...PlayerOnePoints, "win"])
        setBestOfGameX([...bestOfGameX, "win"])
        setWinner(`X wins in Match ${gamesPlayed +1}`)
        setChar("O")
        setCount(1)
        setDrawCells(0)
      }
      else{
        setPlayerTwoPoints([...PlayerTwoPoints,"win"])
        setBestOfGameO([...bestOfGameO, "win"])
        setWinner(`O wins in Match ${gamesPlayed +1}`)
        setChar("X")
        setCount(1)
        setDrawCells(0)
      }
      setWinningCells(['0-0', '1-1', '2-2']);
      if ((gameToggle === "bestOfThree" && gamesPlayed < 2) || (gameToggle === "bestOfFive" && gamesPlayed < 4)){
      setTimeout(() => {
        setWinningCells([]);
        setMatrix([
          ["", "", ""],
          ["", "", ""],
          ["", "", ""]
        ])
      }, 3000);
    }
    }
    else if(matrix[0][2] && matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) {
      setGamesPlayed(gamesPlayed +1)
      setTimer(3)
      if(matrix[2][0]==="X"){
        setPlayerOnePoints([...PlayerOnePoints, "win"])
        setBestOfGameX([...bestOfGameX, "win"])
        setWinner(`X wins in Match ${gamesPlayed +1}`)
        setChar("O")
        setCount(1)
        setDrawCells(0)

      }
      else{
        setPlayerTwoPoints([...PlayerTwoPoints,"win"])
        setBestOfGameO([...bestOfGameO, "win"])
        setWinner(`O wins in Match ${gamesPlayed +1}`)
        setChar("X")
        setCount(1)
        setDrawCells(0)
      }
      setWinningCells(['0-2', '1-1', '2-0']);
      if ((gameToggle === "bestOfThree" && gamesPlayed < 2) || (gameToggle === "bestOfFive" && gamesPlayed < 4)){
      setTimeout(() => {
        setWinningCells([]);
        setMatrix([
          ["", "", ""],
          ["", "", ""],
          ["", "", ""]
        ])
      }, 3000);
    }
    }
    else if(count === 9){
      setGamesPlayed(gamesPlayed +1)
      setChar("O")
      setWinner("The match is draw")
      setCount(1)
      setTimer(3)
      if((gameToggle === "bestOfThree" && gamesPlayed < 2) || (gameToggle === "bestOfFive" && gamesPlayed < 4)){
        setTimeout(() => {
          setMatrix([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
          ]);
          setDrawCells(0);
          
        }, 3000);
      }
    }
    }
  }

  useEffect(()=>{
    if(winner==="X wins"){
      setPlayerOnePoints([...PlayerOnePoints,"Win"])
    }

    if(winner==="O wins"){
      setPlayerTwoPoints([...PlayerTwoPoints, "Win"])
    }
  }, [winner])

  useEffect(()=>{
    if(gameToggle==="bestOfThree"){
      if(gamesPlayed===1){
        setGameMessage('Match 2 Starts in')
      }
      else if(gamesPlayed===2){
        setGameMessage('Final Match Starts in')
      }
    }
    else if(gameToggle==="bestOfFive"){
      if(gamesPlayed===1){
        setGameMessage('Match 2 Starts in')
      }
      else if(gamesPlayed===2){
        setGameMessage('Match 3 Starts in')
      }
      else if(gamesPlayed===3){
        setGameMessage('Match 4 Starts in')
      }
      else if(gamesPlayed===4){
        setGameMessage('Final Match Starts in')
      }
    }
  })

  useEffect(()=>{
    if(gameToggle==="bestOfThree"){
    if(bestOfGameX.length===2){
      setWinner("X wins the Game")
      setBestOfGameX([]);
      setBestOfGameO([]);
      setGameMessage('');
      setGamesPlayed(0)
    }
    else if(bestOfGameO.length===2){
      setWinner("O wins the Game")
      setBestOfGameX([]);
      setBestOfGameO([])
      setGameMessage('')
      setGamesPlayed(0)
    }
    else if(gamesPlayed===3 && bestOfGameX.length>bestOfGameO.length){
      setWinner("X wins the Game")
      setBestOfGameX([]);
      setBestOfGameO([]);
      setGameMessage('');
      setGamesPlayed(0)
    }
    else if (gamesPlayed === 3 && bestOfGameO.length>bestOfGameX.length){
      setWinner("O wins the Game")
      setBestOfGameX([]);
      setBestOfGameO([]);
      setGameMessage('');
      setGamesPlayed(0)
    }
    else if(gamesPlayed===3 && bestOfGameX.length===0 && bestOfGameO.length===0){
      setWinner("Game is Draw")
      setBestOfGameX([]);
      setBestOfGameO([])
      setGamesPlayed(0)
      setGameMessage('');
    }
    else if(gamesPlayed===3 && bestOfGameX.length===1 && bestOfGameO.length===1){
      setWinner("Game is Drawn")
      setBestOfGameX([]);
      setBestOfGameO([])
      setGamesPlayed(0)
      setGameMessage('');
    }
    }
    else if(gameToggle==="bestOfFive"){
      if(bestOfGameX.length===3){
        setWinner("X wins the Game")
        setBestOfGameX([]);
        setBestOfGameO([])
        setGamesPlayed(0)
        setGameMessage('');
      }
      else if(bestOfGameO.length===3){
        setWinner("O wins the Game")
        setBestOfGameX([]);
        setBestOfGameO([])
        setGamesPlayed(0)
        setGameMessage('');
      }
      else if(gamesPlayed===5 && bestOfGameX.length>bestOfGameO.length){
        setWinner("X wins the Game")
        setBestOfGameX([]);
        setBestOfGameO([]);
        setGameMessage('');
        setGamesPlayed(0)
      }
      else if (gamesPlayed === 5 && bestOfGameO.length>bestOfGameX.length){
        setWinner("O wins the Game")
        setBestOfGameX([]);
        setBestOfGameO([]);
        setGameMessage('');
        setGamesPlayed(0)
      }
      else if(gamesPlayed===5 && bestOfGameX.length===0 && bestOfGameO.length===0){
        setWinner("Game is Draw")
        setPlayerOnePoints([]);
        setPlayerTwoPoints([]);
        setBestOfGameX([]);
        setBestOfGameO([])
        setGamesPlayed(0)
        setGameMessage('');
      }
      else if(gamesPlayed===5 && bestOfGameX.length===1 && bestOfGameO.length===1){
        setWinner("Game is Draw")
        setPlayerOnePoints([]);
        setPlayerTwoPoints([]);
        setBestOfGameX([]);
        setBestOfGameO([])
        setGamesPlayed(0)
        setGameMessage('');
      }
      else if(gamesPlayed===5 && bestOfGameX.length===2 && bestOfGameO.length===2){
        setWinner("Game is Draw")
        setPlayerOnePoints([]);
        setPlayerTwoPoints([]);
        setBestOfGameX([]);
        setBestOfGameO([])
        setGamesPlayed(0)
        setGameMessage('');
      }
    }
  }, [bestOfGameX, bestOfGameO, gamesPlayed])


  const handleClick = (r, c) => {
    if(matrix[r][c]) return
    const tmpMatrix = [...matrix]; 
    tmpMatrix[r][c] = char;
    setMatrix(tmpMatrix);
    setChar(char === 'X' ? 'O' : 'X');
    setCount(count + 1);
    setDrawCells(drawCells + 1)
    checkWinner()
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setWinner('');
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [winner]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  

  return (
    <>
    {winner && <div className="banner" style={{ width: "100%", height: "100vh", position: "absolute", backgroundColor:"black", opacity:"0.8", color:"white", fontSize:"50px", fontWeight:"bolder"}}>
      <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"space-evenly", alignItems:"center", flexDirection:"column"}}>
        <div>{winner}</div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <div>{gameMessage}</div>
          <div>{gameToggle!="unlimited" && gamesPlayed!=0 && timer > 0 ? timer: ''}</div>
        </div>
      </div>
    </div>}
      <div className="app">
        <div className="header alignCenter">tic tac toe</div>
        <div className="alignCenter board">
          <div style={{width:"27vw", display:"flex", justifyContent:"space-between", fontWeight:"lighter",height:"7%"}}>
            <div className='palyer'>
            <div style={{display:"flex", flexDirection:"column", height:"100%", alignItems:"center", justifyContent:"space-around"}}>
              <span className={`playerOne ${char === 'X' ? 'underlineAnimation' : ''}`} style={{color:"#ffd700", fontSize:"18px"}}>Player X</span>
              <span className='playerIndication' style={{animation: char==="X" ? "underlineAnimationLeftToRight 0.5s alternate" : "underlineAnimationRightToLeft 1s alternate", display: char==="X" ? "block" : "none", transformOrigin: "left"}}></span>
              </div>
              <div className='scoreCard'>{PlayerOnePoints.length}</div>
            </div>
            <div className='palyer'>
              <div style={{display:"flex", flexDirection:"column", height:"100%", alignItems:"center", justifyContent:"space-around"}}>
                <span className={`playerTwo ${char === 'O' ? 'underlineAnimation' : ''}`} style={{color:"#ffd700", fontSize:"18px"}}>Player O</span>
                <span className='playerIndication' style={{animation: char==="O" ? "underlineAnimationLeftToRight 0.5s alternate" : "underlineAnimationRightToLeft 1s alternate", display: char==="O" ? "block" : "none", transformOrigin: "right"}}></span>
              </div>
              <div className='scoreCard'>{PlayerTwoPoints.length}</div>
            </div>
          </div>
          <div className='gameBoard'>
            {
              matrix.map((row, rIndex) => {
                return (
                  <div className='row' key={rIndex}>
                    {
                      row.map((cell, cIndex) => {
                        return <div onClick={()=> handleClick(rIndex, cIndex)} className={`cell ${winningCells.includes(`${rIndex}-${cIndex}`) ? 'winningCell' : ''} ${drawCells===9 ? 'noMatchingCell' : ''}`} key={cIndex}>{matrix[rIndex][cIndex]}</div>;
                      })
                    }
                  </div>
                );
              })
            }
          </div>

          {<div style={{width:"29%", display:"flex", justifyContent:"space-around", alignItems:"center", border:"2px solid #003153", height:"9%", borderRadius:"5px"}}>
            <button className={`Game_button ${gameToggle==="unlimited" ? 'Selected_button' : ''}`} onClick={()=>{setGameToggle("unlimited"); setPlayerOnePoints([]); setPlayerTwoPoints([]); setChar('X'); setMatrix([
              ["", "", ""],
              ["", "", ""],
              ["", "", ""]
            ]); setWinningCells([]); setDrawCells(0)}}>play Unlimited</button>
            <button className={`Game_button ${gameToggle==="bestOfThree" ? 'Selected_button' : ''}`} onClick={()=>{setGameToggle("bestOfThree"); setPlayerOnePoints([]); setPlayerTwoPoints([]); setChar('X'); setMatrix([
              ["", "", ""],
              ["", "", ""],
              ["", "", ""]
            ]); setWinningCells([]); setGamesPlayed(0); setDrawCells(0)}}>Try best of 3</button>
            <button className={`Game_button ${gameToggle==="bestOfFive" ? 'Selected_button' : ''}`} onClick={()=>{setGameToggle("bestOfFive"); setPlayerOnePoints([]); setPlayerTwoPoints([]); setChar('X'); setMatrix([
              ["", "", ""],
              ["", "", ""],
              ["", "", ""]
            ]); setWinningCells([]); setGamesPlayed(0); setDrawCells(0)}}>Try best of 5</button>
          </div>}

          <div style={{display:"flex", width:"18%", justifyContent:"space-evenly", border:"2px solid #003153", height:"9%", alignItems:"center", borderRadius:"5px"}}>

          {<button className='Play_again_btn' onClick={()=>{
            setWinner('')
            setMatrix([
              ["", "", ""],
              ["", "", ""],
              ["", "", ""]
            ])
            nextTurn==="X wins" ? setChar('O') : setChar('X')
            setCount(1)
            setWinningCells([]);
            setDrawCells(0);
            setChar('X')
            gameToggle==="bestOfThree" || gameToggle==="bestOfFive" ? setPlayerOnePoints([]) : setPlayerOnePoints(PlayerOnePoints)
            gameToggle==="bestOfThree" || gameToggle==="bestOfFive" ? setPlayerTwoPoints([]) : setPlayerTwoPoints(PlayerTwoPoints)
          }}>Play again</button>}
          {<button className='Reset_board_btn' onClick={()=>{
            setMatrix([
              ["", "", ""],
              ["", "", ""],
              ["", "", ""]
            ])
            setChar('X');
            setCount(1);
            setPlayerOnePoints([]);
            setPlayerTwoPoints([]);
            setBestOfGameX([]);
            setBestOfGameO([])
            setGamesPlayed(0);
            setWinningCells([])
          }}>Reset Board</button>}

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
