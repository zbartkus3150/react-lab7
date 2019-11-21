import React from 'react'

function Employee(props){
    if(props.data.isActive === true){
        return(
            <div style={{padding:'1px'}, {color: "green"}}>
                <div>
                    <p>{props.data.name}    {props.data.age}</p>               
                </div>
            </div>
        )
    }
    else{
        return(
            <div style={{padding:'1px'}, {color: "red"}}>
                <div>
                    <p>{props.data.name}    {props.data.age}</p>               
                </div>
            </div>
        )
    }
}
export default Employee