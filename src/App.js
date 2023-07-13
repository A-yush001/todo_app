
import { useState } from 'react';
import './App.css';
import ToDoLists from './ToDoLists';

function App() {
  const[text,setText]=useState("");
  const [listtext,setlist]=useState([])
  const solve =(e)=>{
    
    setText(e.target.value);
  };
  const listOfItems=(e)=>{
    setlist([...listtext,text])

    setText(" ");

  }
  const deleteItems=(id)=>{
    console.log("delete");

    setlist((oldItems)=>{
      return oldItems.filter((arr,index)=>
      {
        return index!== id;
      })
    })
}
  return (
    <>
     <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo App</h1>
          <input type="text" placeholder="Add a Item" value={text} onChange={solve}/>
          <button onClick={listOfItems}>+</button>
          <ol>
            
          {listtext.map((itemval,index) => {
            return <ToDoLists key={index} id={index}
            text={itemval} 
            onSelect={deleteItems} />
          })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
