import React from 'react';



const BingoNode = props => {
    function changeBkgColor(node) {
        /*
            Toggles Color b/w green and transparent
        */
        node = node.target
        if(node.classList.contains("-i")){
            node = node.parentElement;
        }
        if(node.style.backgroundColor != "transparent"){
            node.style.backgroundColor = "transparent";
        }
        else{
            node.style.backgroundColor = "rgb(152,251,152)";
        }
    }

    function difficultyColor(){
        switch(props.node.difficulty){
            case 0:
                return "text-green-600";
            case 1:
                return "text-yellow-500";
            case 2:
                return "text-red-600";
            default:
                return "text-black";
        }
    }

    return (
        <button className="border border-double border-amber-800" style={{"transition": "all .2s", "backgroundColor": "transparent"}} onClick={changeBkgColor}>
                <div className={`${difficultyColor()} w-3/4 p-4 align-text-middle inline-block m-auto -i`}>
                    {props.node.task}
                </div>
        </button>
    );
}

export default BingoNode;