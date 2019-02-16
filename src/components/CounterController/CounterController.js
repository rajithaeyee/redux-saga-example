import React from 'react';

const counterController = (props)=>{

    return(
        <button onClick={()=>props.count(props.actionType)}>
        {props.actionType}
        </button>
    );
}

export default counterController;