import React from "react";

function ToDo(props) {
    function handleDelete() {
        // props.deletePerson(props.name);
        console.log('delete');
      }
    
      return <div> 
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <time dateTime={props.expireDate}></time>
        <button onClick={handleDelete}>Delete</button>
      </div>
}