import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact flex bg-blue-800 p-6'>
      <div>
        <h1 className='text-2xl text-white '>Contactez nos specialistes</h1>
        <p className='text-white text-sm'>Confectionnez le Voyage de vos rêves avec nos conseillers experts</p>
      </div>
      <div>
        <div className='text-white numberContact'>+261 34 00 000 00</div>
      </div>
    </div>
  )
}

export default Contact