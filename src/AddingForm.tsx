import React from "react";



function AddingForm() {
    return(<form onSubmit={() => console.log("Submit")}>
        <input type="text"/> <br/>
        <textarea /> <br/>
        <input type="date"/>
        <button type="submit">Add</button>
    </form>)
}

export default AddingForm;