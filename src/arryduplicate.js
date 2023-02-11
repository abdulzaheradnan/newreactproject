import React from 'react';
import { FirstName } from './App';

const Arryduplicate = () => {

    return (
        <FirstName.Consumer>{(fname=>{
            return  <><h1>{fname.name}</h1>
            <h1>{fname.age}</h1>
            </> 

        })}
        </FirstName.Consumer>
    );
}

export default Arryduplicate;
