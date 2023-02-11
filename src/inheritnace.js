import React from "react";

export default class Arrylist extends React.Component {
    render(){
        return(
            <div>
            <h1>hello faraz bhai what are you doing</h1>
            <Inheritnace name={<Content age={<Newcomponet address={<Details/>}/>}/>}>
               
            </Inheritnace>

            </div>
        )
    }
    
}

function Inheritnace (props)  {
    return   <div> {props.name} </div>
    
}

function Content (props) {
    return <div>
        <h1>content</h1>
        <h1>2</h1>
        <h1>6</h1>
        <h1>4</h1>
        <h1>content</h1>
        <h2>{props.age}</h2>

        </div>
      
    
}
function Newcomponet(props){
    return <div>
        <h1>newcomponent</h1>
        <h2>{props.address}</h2>
    </div>
}

const Details = () => {
    return (
        <div>
            <h1>hello address</h1>
            
        </div>
    );
}





