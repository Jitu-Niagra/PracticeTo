import logo from './logo.svg';
import './App.css'
import Form from './components/pages/Form';
import { useState } from 'react';
import TodoLIst from './components/pages/TodoLIst';

function App() {
   const [input, setInput] = useState("");
   const [todos,setTodos]=useState([])

   
  return (
   <section className="app">
     <h1>Madi's Todo App</h1>
    <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
    <TodoLIst todos={todos} setTodos={setTodos}/>
   </section>
  );
}

export default App;
