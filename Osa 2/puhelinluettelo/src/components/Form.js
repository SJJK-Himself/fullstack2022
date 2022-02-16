import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const ContactForm = (props) => {

    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')
    
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
            setNewName('')
            setNewNum('')
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