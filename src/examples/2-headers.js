import { useState } from 'react'
import axios from 'axios'

const url = 'https://icanhazdadjoke.com/'
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke')
  const [error, setError] = useState('')
  // const [loading, setLoading] = useState(false)

  async function fetchDadJoke() {
    console.log('Dad joke to be handled with request headers')

    try {
      const resp = await axios.get(url, {
        headers: {
          Accept: 'application/json'
        }
      })
      console.log(resp)
      setJoke(resp.data.joke)
    } catch (error) {
      setError('Error fetching data!')
    }
  }

  // if (loading) {
  //   return <h1>Loading ...</h1>
  // }

  if (error) {
    return <p>{Error}</p>
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
