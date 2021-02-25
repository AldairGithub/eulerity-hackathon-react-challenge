import React, { useState } from 'react'
import Title from './title/title'
import PetContainer from './pet_container/PetContainer'
import Footer from './footer/footer'

import './main.css'

export default function Main(props) {
  const { pets } = props

  const [list, setList] = useState([])

  return (
    <main>
      <Title />
        {pets.map((pet, index) => (
          <div className='container'>
            <PetContainer key={index} pet={pet} list={list} setList={ setList }/>
          </div>
        ))}
      {list.length > 0 ? <Footer list={ list } /> : null}
    </main>
  )
}