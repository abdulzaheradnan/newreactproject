import React,{useEffect} from 'react';
import axios from "axios";
import { useState } from 'react';

const Pracice = () => {

    const [array,setarray]=useState([]);


    const dtat=new Promise((resolve,reject)=>{

        setTimeout(()=>{

            let array=[1,2,3,5,6,4,8,9,];
            reject("error while commnicating")
        },5000)

    },)
    dtat.then((array)=>{
        console.log(array)
    },).catch((error)=>{
        console.log(error)
    })

   

    return (
        <div>
           <div>{array.map((item)=>(
            <div className='containerproduct'>

                <img className='imagecontainer' src={item.image} alt=''></img>
            </div>
           ))}</div>
       
        </div>
    );
}

export default Pracice;
