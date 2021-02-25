import axios from 'axios'
import React from 'react'

import './footer.css'

export default function Footer(props) {
  const { list } = props

  const download = (str) => {
    axios({
      url: str.url,
      method: 'GET',
      responseType: 'blod'
    })
      .then((response) => {
        const url = window.webkitURL.createObjectURL(new Blob([response.data]))
        const link = document.createElement("a")
        link.href = url
        link.setAttribute("download", `${str.title.replace(/ /g, "_")}.jpeg`)
        document.body.appendChild(link)
        link.click()
    })
  }

  const handleClick = (arr) => {
    arr.forEach(ele => {
      download(ele)
    })
  }

  return (
    <>
      <div className='footer'>
        <button onClick={(e) => handleClick(list)} className='all-imgs-button'>Download selected images</button>
      </div>
    </>
  )
}