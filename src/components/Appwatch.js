import React from "react";
import {useEffect} from "react";


function App(){
    const rotatesecondHand=(seconds)=>{
        const rotationdegree=seconds*360
        document.querySelector('.second').style.setProperty('--rotation',rotationdegree)
    }
    const rotateminutesHand=(minutes)=>{
        const rotationdegree=minutes*360
        document.querySelector('.minute').style.setProperty('--rotation',rotationdegree)
    }
    const rotatehoursHand=(hours)=>{
        const rotationdegree=hours*360
        document.querySelector('.hour').style.setProperty('--rotation',rotationdegree)
    }
    const myWatch=()=>{
        const currentDate=new Date()
        const seconds=currentDate.getSeconds()/60;
        const minutes=(currentDate.getMinutes()+seconds)/60;
        const hours=(currentDate.getHours()+minutes)/12;
        rotatesecondHand(seconds);
        rotateminutesHand(minutes);
        rotatehoursHand(hours);
    }

    useEffect(()=>{
        setInterval(myWatch,1000);
    },[])

    return (
    <div className="App">
        <div className="watch">
        <div className="hand hour"></div>
        <div className="hand minute"></div>
        <div className="hand second"></div>
        <div>
            <div className="number number1">1</div>
            <div className="number number2">2</div>
            <div className="number number3">3</div>
            <div className="number number4">4</div>
            <div className="number number5">5</div>
            <div className="number number6">6</div>
            <div className="number number7">7</div>
            <div className="number number8">8</div>
            <div className="number number9">9</div>
            <div className="number number10">10</div>
            <div className="number number11">11</div>
            <div className="number number12">12</div>
        </div>
        </div>
    </div>);
}
export default App;