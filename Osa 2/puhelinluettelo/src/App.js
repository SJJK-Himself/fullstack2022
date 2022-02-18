import { useState, useEffect } from 'react'
import ContactRender from './components/ContactRender'
import ContactForm from './components/Form'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [successMessage, setSuccessMessage] = useState(null)

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
      <Notification message={successMessage} />

      <h2>New contact</h2>
        <ContactForm persons={persons} setPersons={setPersons} personService={personService} Notification={Notification} setSuccessMessage={setSuccessMessage}/>

      <h2>Contacts</h2>
        <ContactRender persons={persons} setPersons={setPersons} personService={personService}/>
    </div>
  )
}

export default App