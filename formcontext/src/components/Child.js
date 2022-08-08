import {React, useContext} from 'react'
import { UserContext } from '../App'
import Grandchild from './Grandchild'

const Child = () => {
    let providercount = useContext(UserContext)
    const buttonClicked = () => {
        if (providercount.counter === 10)
        {
          providercount.setCounter(0)
        }
        else{
          providercount.setCounter(providercount.counter+1)
        }
    }
  return (
    <div>
      <Grandchild/>
      <button onClick={buttonClicked}>update</button>
    </div>
  )
}

export default Child
