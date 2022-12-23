//Import Libraries
import React from 'react';
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
    return <div>
      <Navbar/>
      <br></br>
      <BingoBoard/>
      <Settings/>
    </div>;
}

root.render(<App />);