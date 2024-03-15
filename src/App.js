
import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
function App() {

  const [employees, setEmployees]= useState(
    [
      { id:1,
        name: "ibrahima",
        role: "Engineer",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
      },
      {
        id:2,
        name: "David",
        role: "Salesman",
        img:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
      },
      {
        id:3,
        name: "Alain",
        role: "Designer",
        img:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"

      },
      {
        id:4,
        name: "Noora",
        role: "Writer",
       img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"

      },
      {
        id:5,
        name: "Habby",
        role: "Manager",
        img: "https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg"
      },
      {
        id:6,
        name: "Sulaiman",
        role: "Designer",
        img:"https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg"
      },
      {
        id:7,
        name: "Francois",
        role: "Supervisor",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
      },
      {
        id:8,
        name: "Huggins",
        role: "Accountant",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"

      },
      {
        id:9,
        name: "Ansar",
        role: "Programmer",
        img: "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg"

      },
    ]
  )
  

  
  const updateEmployee = (id, newName, newRole)=>{
   const updateEmployees = employees.map((employee)=>{
    if (employee.id === id){
      return {...employee, name:newName, role:newRole}
    } 
    return employee
   })
   setEmployees(updateEmployees)
  }

  return (
    <div className="App justify-center">
     

        <>
        

        <div className='flex flex-wrap m-4'>
           {employees.map((employee)=>{
            return (
              <Employee key={employee.id} id={employee.id} name={employee.name} role={employee.role} img={employee.img} updateEmployee={updateEmployee}/>
            )
           })}

       </div>
       </>
   
     
    </div>
  );
}

export default App;
