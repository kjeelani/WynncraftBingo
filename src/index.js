//Import Libraries
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import firebase from './firebase';


import Navbar from './Navbar';
import BingoBoard from './BingoBoard';
import Settings from './Settings'

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

//Create and show component
function App() {
    const [globalDifficulty, setGlobalDifficulty] = useState(0);
    const [board, reloadBoard] = useState([]);
    
    
    return <div>
      <Navbar/>
      <br></br>
      <BingoBoard bingoBoard={board} setBoard={reloadBoard} setGlobalDiff={setGlobalDifficulty} difficulty={globalDifficulty}/>
      <Settings setGlobalDiff={setGlobalDifficulty}/>
    </div>;
}

root.render(<App />);