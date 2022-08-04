import {React, createContext }from 'react';
import Dashboard from "./components/task4/Dashboard";


const context = createContext()

const Application = () => {
    const state = {
        title : "Shehbaz",
        surname : "Shaik",
        activeProfileId : "124",
    }
  return (
    <div>
        <context.Provider value={state}>
            <Dashboard/>
        </context.Provider>
    </div>
  )
}

export default Application
export {context}