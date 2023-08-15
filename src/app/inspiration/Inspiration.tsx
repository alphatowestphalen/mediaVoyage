import Carde from '@/components/Carde/Carde'
import CardeInspiration from '@/components/cardeInspiration/CardeInspiration'
import Titre from '@/components/titre/Titre'
import React from 'react'

const Inspiration: React.FC = () => {

  return (
    <div className='inspiration'>
      <Titre desc='du moment' titre="INSPIRATION"/>
      {/* <Carde /> */}
      <CardeInspiration />
    </div>
  )
}

export default Inspiration