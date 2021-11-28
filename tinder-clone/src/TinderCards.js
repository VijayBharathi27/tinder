import React,{useState,useEffect} from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
import axios from 'axios';
function TinderCards() {
    const [people, setPeople]=useState([]);

     useEffect(()=>{
         async function fetchData(){
             const req = await axios.get('/tinder/cards');
             setPeople(req.data);
         }
     })

    const swiped =(direction,nameToDelete)=>{
        console.log("removing"+nameToDelete);
        //setLastDirection(direction);
    };
    const outOfFrame=(name)=>{
        console.log(name+"left the screen");
    };
    return (
        <div className="tindercards">
            <div className="tindercard_cardcontainer">
        {people.map((person)=>( 
        <TinderCard
        className="swipe"
        key={person.name}
        preventSwipe={["up","down"]}
        onSwipe={(dir)=>swiped(dir,person.name)}
        onCardLeftScreen={()=>outOfFrame(person.name)}>
            <div style={{backgroundImage:`url(${person.imgUrl})`}} className="card"><h1>{person.name}</h1></div>
        </TinderCard>
        ))}
        </div>  
        </div>
    )
}

export default TinderCards 
