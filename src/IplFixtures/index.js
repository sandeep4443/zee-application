import React, {useState, useEffect} from 'react';
import GroupA from './GroupA.json';
import GroupB from './GroupB.json';

const IplFixtures = ()=>{
    const[fixtures, setFixtures] = useState([]);
     useEffect(()=>{
        const groups = [GroupA, GroupB];
        groups.map(group => {
            for(let k=0; k<=groups.length-1; k++){
            for(let i=0; i< group.length; i++){
                for(let j=i+1; j< group.length; j++){
               setFixtures(team=>{
                return new Set([...team,`${group[i].team} vs  ${group[j].team} at ${group[k].venue}`])
               })
                  }
            }
            }
            });
            
            GroupA.map(groupA =>{
                GroupB.map(groupB =>{
                    for(let i=0; i<=GroupA.length; i++){
                    for(let j=0; j<=GroupB.length; j++){
                        const random = Math.floor(Math.random());                
                               if(groupA.index === groupB.index){
                                const random = Math.floor(Math.random());
                                setFixtures(team=>{
                                    return ([...team,`${groupA.team} vs  ${groupB.team} at ${[groupA.venue|| groupB.venue][random]}`])
                                   }) 
                            }
                            setFixtures(team=>{
                                return new Set([...team,`${groupA.team} vs  ${groupB.team} at ${[groupB.venue|| groupA.venue][random]}`])
                               });
                      }}   
                })   
            });
     },[]);
     
     console.log(Object.entries(fixtures));
     return(
        <div>{fixtures}</div>
     )
};


export default IplFixtures;