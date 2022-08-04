import React from 'react'
import { context } from '../../Application'
import Stack from 'react-bootstrap/esm/Stack'
const Topnav = () => {
  return (
    <div>
         <Stack  gap={3} style={{border:"1px solid"}}>
            <h5>Topnav</h5>
            <context.Consumer>
                {(state)=>{
                    return <p  className="bg-light border">the title is {state.title}</p>
                }}
            </context.Consumer>
        </Stack>
    </div>
  )
}

export default Topnav