import './App.css';
import React, { useState, createContext } from "react";
import Form from './components/Form';
import Parent from './components/Parent';

const UserContext = createContext()

function App() {
  const [counter,setCounter] = useState(0)
  const providercount = {counter,setCounter}
  return (
    <div className="App">
      <Form/>
      <UserContext.Provider value={providercount}>
          <Parent/>  
      </UserContext.Provider>
    </div>
  );
}

export default App;
export {UserContext};
