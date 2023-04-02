import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import starter from '../starterText.js';




export default function Previewer(props) {

  return (
    <div className='col-6 bg-info p-3 display'>
      <div className="display-box">
        <div
          id="preview" className="display-box__preview p-3"
        >
          <ReactMarkdown children={props.text} renderers={{
            code: Component,
          }}/>
        </div>
      </div>
    </div>
  )
}



const Component = (value, language) => {

  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ''}
    </SyntaxHighlighter>
  );
};