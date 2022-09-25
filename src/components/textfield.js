import Form from "react-bootstrap/Form";
import propTypes from "prop-types";
import { useState } from "react";

function Textfield(props) {
    
  const handleclick = () => {
    console.log("clicked" +text);
    let newtext = text.toUpperCase();
    setText(newtext) ;
  };

  const handleonchange = (event) => {
    console.log("Onchange")
    setText(event.target.value)
  };

  const [text, setText] = useState("");

  return (
    <div>
      <Form>
        <h1>{props.heading}</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Text Here</Form.Label>
          <Form.Control
            as="textarea"
            value = {text}
            onChange={handleonchange}
            rows={8}
          />
        </Form.Group>
      </Form>
      <>
        <button className="btn btn-primary" onClick={handleclick}>
          Convert to uppercase
        </button>
      </>
      <div className="container my-5">
        <h1> Your summary </h1>
        <p>{text.split(" ").length} words , {text.length} character</p>
        <h1>Reading Time</h1>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Textfield;
propTypes.textfield = { heading: propTypes.string };
