
import { useState } from 'react';
import './index.css';
import {v4 as uuidv4} from 'uuid'
import Employee from './components/Employee';
function App() {

  const [employees, setEmployees] =useState(
    [
      {
        name: "ibrahima",
        role: "Engineer",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
      },
      {
        name: "David",
        role: "Salesman",
        img:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
      },
      {
        name: "Alain",
        role: "Designer",
        img:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"

      },
      {
        name: "Noora",
        role: "Writer",
       img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"

      },
      {
        name: "Habby",
        role: "Manager",
        img: "https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg"
      },
      {
        name: "Sulaiman",
        role: "Designer",
        img:"https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg"
      },
      {
        name: "Francois",
        role: "Supervisor",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
      },
      {
        name: "Huggins",
        role: "Accountant",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"

      },
      {
        name: "Ansar",
        role: "Programmer",
        img: "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg"

      },
    ]
  )

  return (
    <div className="App justify-center">
     

        <>
        

        <div className='flex flex-wrap m-4'>
           {employees.map((employee)=>{
            return (
              <Employee key={uuidv4()} name={employee.name} role={employee.role} img={employee.img}/>
            )
           })}

       </div>
       </>
   
     
    </div>
  );
}

export default App;
