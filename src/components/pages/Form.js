import React, { useState } from 'react'
// styling
import {Button, FormControl, FormHelperText, Input, InputLabel} from '../../../node_modules/@material-ui/core'
import { Add } from "../../../node_modules/@material-ui/icons";
import '../css/Form.css'


function Form({input,setInput,todos,setTodos}) {
    const inputHandler = (e) => {
      setInput(e.target.value);
    };
    const submitHandler=(e)=>{
            console.log(e.target.value)
            e.preventDefault();
            setTodos([...todos,{text:input,completed:false,id:Math.random()}])
            setInput('')

    }
   
    return (
      <form className="formDiv">
        <FormControl>
          <InputLabel htmlFor="my-input">ToDo Item</InputLabel>
          <Input id="my-input"  value={input} onChange={inputHandler} />
          <FormHelperText id="my-input-text">Todo Item {input}</FormHelperText>
        </FormControl>
        <Button disabled={!input} type="submit" className="addButton" onClick={submitHandler}>
          <Add />
        </Button>
      </form>
    );
}

export default Form
