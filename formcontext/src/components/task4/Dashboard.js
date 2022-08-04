import React from 'react'
import Main from './Main'
import Sidenav from './Sidenav';
import { context } from '../../Application';
import Stack from 'react-bootstrap/Stack';


const Dashboard = () => {
  return (
    <div>
        <Stack gap={3} style={{border:"1px solid"}}>
            <h5>Dashboard</h5>
            <context.Consumer>
                {(state)=>{
                    console.log("state", state)
                    return(
                        <>
                        <p className="bg-light border">title is {state.title}</p>
                        <p className="bg-light border">surname is {state.surname}</p>
                        <p className="bg-light border">activeProfileId is {state.activeProfileId}</p>
                        </>
                    )
                }}
            </context.Consumer>
        </Stack>
        <Sidenav/>
        <Main/>
    </div>
  )
}

export default Dashboard