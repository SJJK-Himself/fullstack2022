import React from 'react'

const Contact = (props) => {

  const personService = props.personService
  const person = props.person
  
  const handleDelete = () => {
    if(window.confirm("Confirm?")) {
      personService.deletePerson(person.id)
      const result = props.persons.filter(p => p.name !== person.name);
      console.log(result)
      console.log("Contact", person.name, "deleted")
      props.setPersons(result)
    }
    else{
      console.log("Deletion canceled:", person.name)
    }
  }

  return (
    <div>
      <p>
        {person.name} {person.number} <button onClick={() => handleDelete(person.id)}>Delete</button>
      </p>
    </div>
  )
}

export default Contact