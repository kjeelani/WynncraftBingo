import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import BingoNode from './BingoNode';



const BingoBoard = props => {
    const [loading, setLoading] = useState(false);
    const ref = firebase.firestore().collection("nodes");

    function generateBoard(nodeArray) {
        /*
            Input: nodes (firebase collection / dictionary) 
            
            Output: a 5x5 matrix containing 25 nodes distributed by difficulty (middle node is Free Space)
        */
        function shuffle(array){
            for (var i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        nodeArray = shuffle(nodeArray);
        
        var sortedChallenges = [[],[],[]];
        var diffDistribution = {0:[12,6,6],1:[8,8,8],2:[5,10,9]};
        for(const node in nodeArray){
            sortedChallenges[nodeArray[node].difficulty].push(nodeArray[node]);
        }
        var selectedChallenges = shuffle(sortedChallenges[0].slice(0,diffDistribution[props.difficulty][0])
                                .concat(sortedChallenges[1].slice(0,diffDistribution[props.difficulty][1]))
                                .concat(sortedChallenges[2].slice(0,diffDistribution[props.difficulty][2])));
        selectedChallenges.splice(12,0,{task: "Free Space", difficulty: -1});
        return selectedChallenges;
    }

    function initBoard(){
        //Query Database
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            var nodes = [];
            querySnapshot.forEach((doc) => {
                nodes.push(doc.data()); 
            });
            props.setBoard(generateBoard(nodes));
            setLoading(false);
        });
    }


    useEffect(() => {
        initBoard();
    }, [props.difficulty]);


    if (loading) {
        return <h1>...</h1>;
    }

    


    return (
        <div className="grid grid-rows-5 grid-flow-col max-w-4xl border-4 border-solid border-amber-900 text-center m-auto">
            {props.bingoBoard.map(node => 
                    <BingoNode node={node}/>
            )}
        </div>
    );
}



export default BingoBoard;



