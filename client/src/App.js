import React, {useState, useEffect} from 'react'
import Main from './components/main'
import axios from 'axios'

export default function App() {
  const [pets, setPets] = useState([])
  
  const getPets = async () => {
    try {
      let URL = 'https://eulerity-hackathon.appspot.com/pets'
      const response = await axios.get(URL)
      setPets(response.data)
    } catch (error) {
      console.log(`This is your error: ${error}`)
    }
  }
   
  useEffect(() => {
    getPets()
  }, [])

  return (
    <div>
      <Main pets={ pets }/>
    </div>
  );
}

