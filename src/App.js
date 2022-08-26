import React from 'react';

import './App.css';

function App() {
  

  
  return (
  <div className='container'>
    <div class="row">
      <div class="col text-center text-white bg-success">
      <h1>Mark Down previewer</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-6 bg-primary">
        <p >The editor will be here</p>
        <textarea id="editor" onkeyup="upDatePreview()"></textarea>
      </div>
      <div class="col-6 bg-danger">
          <p>The markdown preview will be here</p>
          <div id="preview"></div>
      </div>






    </div>


  </div>

    



















  );
}

export default App;
