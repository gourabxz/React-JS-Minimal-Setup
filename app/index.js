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
    </div>
    )
}


