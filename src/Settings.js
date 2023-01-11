import React, { useState, useEffect } from 'react';
import { useStateWithCallbackLazy } from 'use-state-with-callback';


const Settings = props => {
    const [difficulty, setDifficulty] = useStateWithCallbackLazy(0);
    //const [loading, setLoading] = useState(false);

    function changeDifficulty(){
        /*
            Every time difficulty button is pressed:
            1) Change color of difficulty button
            2) Update difficulty state
        */
        function changeDifficultyHelper() {
            var diffButton = document.getElementById("difficultyButton");
            switch(difficulty){
                case 0:
                    var newColors = ['bg-green-500', 'hover:bg-green-700', 'border-green-700'];
                    var text = "Easy";
                    break;
                case 1:
                    var newColors = ['bg-yellow-500', 'hover:bg-yellow-700', 'border-yellow-700'];
                    var text = "Medium";
                    break;
                case 2:
                    var newColors = ['bg-red-500', 'hover:bg-red-700', 'border-red-700'];
                    var text = "Hard";
            }
            //Find classes to remove, remove them, and add new classes
            var filterClassList = [];
            for(const c of diffButton.classList){
                if (c.includes("00")){
                    filterClassList.push(c);
                }
            }
            for(const c of filterClassList){
                diffButton.classList.remove(c);
            }
            for (const c of newColors){
                diffButton.classList.add(c);
            }
            diffButton.innerHTML = text;
        }

        setDifficulty((difficulty+1)%3,() => {changeDifficultyHelper();});
        props.setGlobalDiff(difficulty);
    }


    return (
        <div className='mt-16 m-auto text-center'>
            <div className='inline-block mr-5'>
                <button onClick={function(){window.location.reload();}} className=
                'inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded'>
                    Generate Board
                </button>
            </div>
            <div className='inline-block ml-5'>
                <button id="difficultyButton" onClick={changeDifficulty} className=
                'inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-36 border border-green-700 rounded'>
                    Easy
                </button>
            </div>
        </div>
    );
}

export default Settings;