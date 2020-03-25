import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import TestPage from './Pages/TestPage';

function Clock(Props){
    let [myData, setMyData] = useState();

    function toggle() {
        setMyData(!myData);
    }
    
    return(
    <div>
        <h1>React JS Minimal Setup</h1>

        <h4>{Props.date.toLocaleTimeString()}</h4>
        <button onClick={()=>toggle()}>Click to change</button>
        {myData?(<TestPage/>):null}
    </div>
    )
}


function tick(){
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    )
}


setInterval(tick, 1000);

