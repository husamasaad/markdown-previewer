import React from 'react';
import Editor from './components/Editor.js';
import Previewer from './components/Previewer.js';
import './scss/App.scss';
import starter from './starterText.js';






function App() {
  const [input, setInput] = React.useState(starter);

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleClear = () => {
    setInput('')
  }


  return (
    <main>
      <div className='container-fluid'>
        <div className='row text-center bg-success text-white py-3 header align-items-center'>
          <h1>Markdown Previewer</h1>
        </div>
        <div className='row'>
            <Editor text={input} handleChange={handleChange} handleClear={handleClear} />
            <Previewer text={input}/>
        </div>
      </div>
    </main>
  );
}

export default App;
