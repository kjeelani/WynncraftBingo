import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import BingoNode from './BingoNode';



function BingoBoard() {
    const [nodes, setNodes] = useState([]);
    const [bingoBoard, setBoard] = useState([]);
    const [loading, setLoading] = useState(false);
    const ref = firebase.firestore().collection("nodes");

    function generateBoard(nodeArray) {
        /*
            Input: nodes (firebase collection / dictionary) 
            
            Output: a 5x5 matrix containing 25 randomly distibuted nodes (middle node is Free Space)
        */
        console.log(nodeArray);
        let digitArray = Array.from(Array(25).keys());
        let shuffledArray = digitArray.
        map(value => ({ value, sort: Math.random() })).
        sort((a, b) => a.sort - b.sort).
        map(({ value }) => value);
        
        
        var board = Array(5).fill(0).map(()=>Array(5).fill(0));
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                board[i][j] = nodeArray[shuffledArray[5*i+j]];
                if(i == 2 && j == 2){
                    board[i][j] = {task: "Free Space", difficulty: -1, id: -1}
                }
            }
        }
        return board;
    }

    function initBoard(){
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            var nodes = [];
            querySnapshot.forEach((doc) => {
                nodes.push(doc.data()); 
            });
            setBoard(generateBoard(nodes));
            setNodes(nodes);
            setLoading(false);
        });
    }


    useEffect(() => {
        initBoard();
    }, []);


    if (loading) {
        return <h1>...</h1>;
    }

    


    return (
        <div className="grid grid-rows-5 grid-flow-col gap-4 max-w-3xl text-center m-auto">
            {bingoBoard.map(row => 
                    row.map(node =>
                        <BingoNode node={node}/>
                    )
            )}
        </div>
    );
}



export default BingoBoard;



