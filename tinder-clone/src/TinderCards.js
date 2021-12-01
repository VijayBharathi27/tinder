import React,{useState,useEffect} from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
import axios from 'axios';
function TinderCards() {
    console.log("calling TinderCards");
    const [people, setPeople]=useState([]);

     useEffect(()=>{
         const fetchData = async () => {
             //axios part
            // const BASE_URL = 'http://localhost:8000';
        try {
            const res = await axios.get(`http://localhost:8000/tinder/cards`);

            const profiles = res.data;

            console.log(`GET: Here's the list of profiles`, profiles);
            setPeople(res.data);
        }catch (err) {
            console.error(err);
        }
        };
        //before
            //  const req = await axios.get('/tinder/cards');
            //  setPeople(req.data);         
         fetchData();
     })

    const swiped =(direction,nameToDelete)=>{
        console.log("removing"+nameToDelete);
        //setLastDirection(direction);
    };
    const outOfFrame=(name)=>{
        console.log(name+"left the screen");
    };
    return (
        <div className="container">
        <div className="tindercards">
            
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
