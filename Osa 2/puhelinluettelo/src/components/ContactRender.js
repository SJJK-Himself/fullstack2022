import React from 'react'
import Contact from './SingleContact'

const ContactRender = (props) => {

    return(
        <ul>
            {props.persons.map(person => 
                <Contact key={person.name} persons={props.persons} person={person} setPersons={props.setPersons} personService={props.personService}/>
            )}
        </ul>
    )
}

export default ContactRender