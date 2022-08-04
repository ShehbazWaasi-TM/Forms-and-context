import React from 'react';
import Page from  './Page';
import Topnav from './Topnav';
import { context } from '../../Application';
import Stack from 'react-bootstrap/esm/Stack';

const Main = () => {
  return (
    <div>
          <Stack  gap={3} style={{border:"1px solid"}}>
            <h5>Main</h5>
            <context.Consumer>
                {(state)=>{
                    return (
                        <>
                         <p  className="bg-light border">the title is {state.title}</p>
                        <p  className="bg-light border">the surname is {state.surname}</p>
                        </>
                    )
                }}
            </context.Consumer>
        </Stack>
        <Topnav/>
        <Page/>
    </div>
  )
}

export default Main