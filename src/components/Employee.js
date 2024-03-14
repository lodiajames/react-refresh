function Employee (props) {
   return (
    <>
   <h3>Employee {props.name}</h3>
    <p>{props.role? props.role : <h4>No role</h4>}</p>
    </>
   )

}

export default Employee