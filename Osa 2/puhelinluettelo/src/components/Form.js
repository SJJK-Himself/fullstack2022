import React from 'react'
import { useState } from 'react'

const ContactForm = (props) => {

    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')
    
    //Lisää yhteystiedon ja tarkistaa ettei samannimistä yhteystietoa ole jo tallennettu
    const addName = (event) => {
        event.preventDefault()
    
        const match = props.persons.find(person => (
          person.name.toLowerCase() === newName.toLowerCase()
        ))
    
        if (match) {
          window.alert("A Contact with that name already exists!")
          return
        }
    
        const personObject = {
          name: newName,
          number: newNum
        }

        props.personService
        .create(personObject)
        .then(returnedPerson => {
            props.setPersons(props.persons.concat(returnedPerson))
            props.setMessage(
                `Contact '${newName}' was succesfully added`
              )
              setTimeout(() => {
                props.setMessage(null)
              }, 5000)
            setNewName('')
            setNewNum('')
        })
        .catch(error => {
            console.log(error.response.data)
        })
    }
    
    
    const handleNameChange = (event) => {
        //console.log(event.target.value)
        setNewName(event.target.value)
    }
    
    const handleNumChange = (event) => {
        //console.log(event.target.value)
        setNewNum(event.target.value)
    }

    return(
        <div>
            <form onSubmit={addName}>
                <div>
                    Name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    Number: <input value={newNum} onChange={handleNumChange}/>
                </div>
                <div>
                    <button type="submit">Add contact</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm