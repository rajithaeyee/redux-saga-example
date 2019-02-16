import React from 'react';

const counterController = (props)=>{

    return(
        <button onClick={props.clicked}>
        {props.actionType}
        </button>
    );
}

export default counterController;