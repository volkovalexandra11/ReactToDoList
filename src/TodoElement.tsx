import { observer } from "mobx-react";

export type TodoProps = {
    name: string,
    description: string,
    expireDate: Date,
    status: boolean
}

function TodoElement(props : TodoProps) {

    // function getStatus() : string {
    //     return props.status ? "Done" : "Undone";
    // }


    return(
        <div>
            <input type="checkbox" defaultChecked={props.status}></input>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p><time dateTime={props.expireDate.toDateString()}></time></p>
            <button>Delete</button>
        </div>
    )
}

export default TodoElement