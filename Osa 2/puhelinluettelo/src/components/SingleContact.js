import React from 'react'

const Contact = ({person}) => {
  
  const handleDelete = () => {
    if(window.confirm("Confirm?")) {
      //MITÄ HELKKARIA TÄHÄN TULEE??
      console.log("naicu")
    }
    else{
      console.log("Deletion canceled")
    }
    
  }

  return (
    <div>
      <p>
        {person.name} {person.number} <button onClick={handleDelete}>Delete</button>
      </p>
    </div>
  )
}

export default Contact