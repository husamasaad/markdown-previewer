import React from "react";
import starter from '../starterText.js';





export default function Editor(props) {


  return (
    <div className='col-6 bg-primary p-3 display'>
      <div className="display-box">
        <span 
        className="clearInput btn btn-danger"
        onClick={props.handleClear}
        >
          Clear
        </span>
        <textarea
          id="editor" className="display-box__editor px-3"
          value={props.text}
          onChange={props.handleChange}
          placeholder="write your markdown here.."
          ></textarea>
      </div>  
    </div>
  )
}