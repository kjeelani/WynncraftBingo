import React from 'react';

const Settings = props => {
    return (
        <div className='mt-16 m-auto text-center'>
            <div className='inline-block mr-5'>
                <button onClick={function(){window.location.reload()}} className=
                'inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
                    Generate Board
                </button>
            </div>
            <div  className='inline-block ml-5'>
                <button className=
                'inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
                    Difficulty (WIP)
                </button>
            </div>
        </div>
    );
}

export default Settings;