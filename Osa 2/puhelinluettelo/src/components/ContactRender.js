import React from 'react'
import Contact from './SingleContact'

const ContactRender = (props) => {

    return(
        <ul>
            {props.persons.map(person => 
                <Contact key={person.name} person={person}/>
            )}
        </ul>
    )
}

export default ContactRender