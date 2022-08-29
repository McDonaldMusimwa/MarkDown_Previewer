import React, {  useState }from 'react';
import ReactMarkdown from 'https://esm.sh/react-markdown@7'

import './App.css';



function App (){
 const [input,setInput]= useState();
    
  return (
  <div className='container'>
    <h1>Mark Down previewer</h1>
    <div class="row">
      <div class="col text-center text-white bg-success">
        
      </div>
    </div>
    <div class="row">
      <div class="col-6 bg-primary">
        <p >The editor will be here</p>
        <textarea id="editor" value={input} onkeyup={(e)=>setInput(e.target.value)}></textarea>
      </div>
      <div class="col-6 bg-danger">
        <p>The preview will be here</p>
        <div id="preview rounded">
        <ReactMarkdown source={input}/>

        </div>
      </div>






    </div>


  </div>

  );
  
}
export default App;
