import { useState } from 'react'
import axios from 'axios'

const url = 'https://icanhazdadjoke.com/'
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke')

  function fetchDadJoke() {
    console.log('Dad joke to be handled with request headers')
  }
  return (
    <section className="section text-center">
      <button
        className="btn"
        onClick={fetchDadJoke}
      >
        random joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  )
}
export default Headers
