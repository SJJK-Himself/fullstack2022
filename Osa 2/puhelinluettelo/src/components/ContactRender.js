import React from 'react'
import Contact from './SingleContact'

const ContactRender = (props) => {

    return(
        <ul>
            {props.persons.map(person => 
                <Contact key={person.name} person={person} personService={props.personService}/>
            )}
        </ul>
    )
}

export default ContactRender