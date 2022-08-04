import {React,useRef} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Uncontrolled = () => {
    const FirstName = useRef(null)
    const LastName = useRef(null)
    const Email    = useRef(null)
    const SecurityQuestion = useRef("Select an option")
    const formsubmit = (e) =>{
        e.preventDefault()
        console.log(FirstName.current.value)
        console.log(LastName.current.value)
        console.log(Email.current.value)
        console.log(SecurityQuestion.current.value)   
    }
    // if(FirstName===null && LastName===null && Email===null && SecurityQuestion==="Select an option")
  return (
    <div style={{"border":"1px solid", "borderRadius":"5px" , "backgroundColor":"salmon"}}>
        <h4>UnControlled Component</h4>
        <Form action="" onSubmit={formsubmit}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="FirstName" style={{"color":"white"}} >FirstName:</Form.Label>
                <Form.Control type="text" id="FirstName" ref={FirstName} minLength="3" maxLength="15"/>
            </Form.Group >
            <Form.Group className="mb-3">
                <Form.Label htmlFor="LastName" style={{"color":"white"}} minLength="3" maxLength="15" >LastName:</Form.Label>
                <Form.Control type="text" id="LastName" ref={LastName} />
            </Form.Group >
            <Form.Group className="mb-3">
                <Form.Label htmlFor="Email" style={{"color":"white"}} required>Email:</Form.Label>
                <Form.Control type="text" id="Email" ref={Email} />
            </Form.Group >
            <Form.Group  className="mb-3">
                    <Form.Select
                    id="security-ques"
                    >
                    <option id="Select an option">Select an option</option>
                    <option id="What is your mother's maiden name?" ref={SecurityQuestion}>
                    What is your mother's maiden name?
                    </option>
                    <option id="What was the name of your first pet?" ref={SecurityQuestion}>
                    What was the name of your first pet?
                    </option>
                    <option id="What was the name of your first school?" ref={SecurityQuestion}>
                    What was the name of your first school?
                    </option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
            <Form.Label style={{"color":"white"}}> Security Answer :</Form.Label>
              <Form.Control
                type="text"
                name="answer"
                placeholder="Answer"
                minLength="7"
              />
            </Form.Group>
            <br />
            <Button type="submit">submit</Button>
            <Button style={{"backgroundColor":"red"}}>cancel</Button>
        </Form>
    </div>
  )
}

export default Uncontrolled