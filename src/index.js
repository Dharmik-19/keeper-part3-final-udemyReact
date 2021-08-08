import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/

//Refer to the last two sandboxes, they have lots of indormation to be gained from them
//1) https://codesandbox.io/s/managing-a-component-tree-practice-oe6y7?fontsize=14&hidenavigation=1&theme=dark
//2) https://codesandbox.io/s/keeper-part-3-starting-pogqj?fontsize=14&hidenavigation=1&theme=dark

//Refer to this for onKeyPress: https://www.codegrepper.com/code-examples/javascript/react+on+enter+keypress

// <input onChange={addDummyItem} onKeyPress={enterPressed} type="text" value={dummyItem}/>

// function enterPressed(e){
//   e.key === "Enter" && addItem();
//   //console.log(e.key);
// }
