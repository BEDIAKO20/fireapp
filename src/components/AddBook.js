import React from 'react'
import { Form,InputGroup} from "react-bootstrap"


function AddBook() {
  return (
    <>
       <InputGroup className="mt-3 w-25">
        <InputGroup.Text id="basic-addon1">A</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mt-3 w-25">
        <InputGroup.Text id="basic-addon1">A</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

    </>
  )
}

export default AddBook
