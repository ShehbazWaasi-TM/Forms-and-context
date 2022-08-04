import React from 'react';
import { context } from '../../Application'
import Stack from 'react-bootstrap/esm/Stack'

const Page = () => {
  return (
    <div>
         <Stack  gap={3} style={{border:"1px solid"}}>
            <h5>Page</h5>
            <context.Consumer>
                {(state)=>{
                    return <p  className="bg-light border">the surname is {state.surname}</p>
                }}
            </context.Consumer>
        </Stack>
    </div>
  )
}

export default Page