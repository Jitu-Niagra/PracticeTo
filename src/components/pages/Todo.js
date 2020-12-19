import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import {
  
  Delete,
 
} from "@material-ui/icons";
import '../css/Todo.css'
import React from 'react'

function Todo({text,todo,todos,setTodos}) {
  const deleteHandler=()=>{
    setTodos(todos.filter((doItem)=>doItem.id !==todo.id))
  }
  
  // const completeHandler=()=>{
  //   setTodos(todos.map((item)=>{
     
  //     if(item.id===todo.id){
  //        console.log("complted");
  //       return{
  //         ...item,completed:!item.completed

  //       }
       
  //     } 
  //      return item;
  //   }))
  // }
    return (
      <List class="todo">
        <ListItem>
          <ListItemText style={{'color':'white !important'}} primary={text} />
        </ListItem>
        <div className="btn-div">
          {/* <Button  onClick={completeHandler}>
            <CheckBoxOutlineBlank onClick={changeIcon} />
          </Button> */}
          <Button onClick={deleteHandler}>
            <Delete  />
          </Button>
        </div>
      </List>
    );
}

export default Todo
