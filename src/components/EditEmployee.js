import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div >
          <button  onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-white-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Update</button>

    

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='bg-blue-100'
        
      >
        <Modal.Header closeButton> 
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         

<form onSubmit={(e)=>{
  e.preventDefault()
  
  props.updateEmployee( props.id, name, role)

}} id='editmodal' className="max-w-sm mx-auto">
  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
    <input type="text" id="name"  value={name} onChange={(e)=>setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" required />
  </div>
  <div className="mb-5">
    <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
    <input type="text" id="role"  value={role} onChange={(e)=>setRole(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Your role' required />
  </div>

</form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className='bg-indigo-500  hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded'>
            Close
          </Button>
          <button  form='editmodal' variant="primary" className="bg-indigo-500 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded">Update</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditEmployee;