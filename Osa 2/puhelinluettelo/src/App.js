import { useState, useEffect } from 'react'
import ContactRender from './components/ContactRender'
import ContactForm from './components/Form'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>

      <h2>New contact</h2>
        <ContactForm persons={persons} setPersons={setPersons} personService={personService}/>

      <h2>Contacts</h2>
        <ContactRender persons={persons}/>
    </div>
  )
}

export default App