import React from 'react';



const BingoNode = props => {
    return (
        <button className="rounded-md" style={{"transition": "all .2s", "backgroundColor": "transparent"}} onClick={
            function changeColor(node) {
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
            }}>
                <div className="w-2/3 align-text-middle inline-block m-auto -i">
                    {props.node.task}
                </div>
        </button>
    );
}

export default BingoNode;