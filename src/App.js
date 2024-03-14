
import { useState } from 'react';
import './App.css';
import Employee from './components/Employee';
function App() {
  const [role, setRole] =useState('dev')
const compenent = true
  return (
    <div className="App">

      {compenent? <div> 
        <>
        <input type='text' onChange={(e)=>{
              setRole(e.target.value)} }/>

       <Employee  name='iba' role='intern'/>
       <Employee name='sousou' role={role}/>
       <Employee name='adama' />
       <Employee/>
       </>
       </div>: <h1>There is no compenent</h1>}
     
    </div>
  );
}

export default App;
