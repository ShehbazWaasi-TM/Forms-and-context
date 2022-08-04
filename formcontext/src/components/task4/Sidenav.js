import React from 'react'
import { context } from '../../Application';
import Stack from 'react-bootstrap/Stack';

const Sidenav = () => {
  return (
    <div>
        <Stack  gap={3} style={{border:"1px solid"}}>
            <h5>Sidenav</h5>
            <context.Consumer>
                {(state)=>{
                    return <p  className="bg-light border">the activeProfileId is {state.activeProfileId}</p>
                }}
            </context.Consumer>
        </Stack>
    </div>
  )
}

export default Sidenav