import React, { useState } from 'react'

import './PetContainer.css'

export default function PetContainer(props) {
  const { pet, list, setList } = props

  const [selected, setSelected] = useState(false)

  const createdOn = (data) => {
    const date = data.split(" ")
    return (
      <>
        <p className='pet-joined'>{ `Joined on ${date[0]}, ${date[1]} ${date[2]}, ${date.length - 1}` }</p>
      </>
    )
  }
  const handleClick = (data) => {
    if (list.includes(data)) {
      setList(list.filter(item => item !== data))
      setSelected(false)
    } else {
      const newPet = list.concat(data)
      setList(newPet)
      setSelected(true)
    }
  }

  return (
    <>
      <div className='img-container'>
        <img className={`img-pet ${selected && "selected-img"}`} src={pet.url} crossOrigin="Anonymous" alt={ pet.title }/>
        <div className='text-div'>
          <h3 className='pet-title'>{pet.title}</h3>
          {createdOn(pet.created)}
          <p className='pet-description'>{pet.description}</p>
          <div className='download-button-container'>
            <button onClick={(e) => handleClick(pet) }className='download-button'>Select</button>
          </div>
        </div>
      </div>
    </>
  )
}