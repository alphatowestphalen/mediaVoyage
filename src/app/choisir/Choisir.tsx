import Titre from '@/components/titre/Titre'
import React from 'react'
import './Choisire.css'

const Choisir = () => {
  return (
    <div>
      <Titre titre='Pourquoi choisir MediaVoyage ?' desc='' />
      <div className='flex choisire'>
        <p >
          <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1 bg-black " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          <strong>Des specialistes, un conseillers</strong><br />
          Une equipe de specialistes à votre ecoute 7j/7
        </p>
        <p>
          <strong>Des prix ultra-negocies</strong><br />
          Des voyages haute gamme à prix ultra-negocies.
        </p>
        <p>
          <strong>Testes et appouves</strong><br />
          selection de voyages testes et approuver par nos experts.
        </p>
        <p>
          <strong>Assistance 7j/7</strong><br />
          Voyagez l esprit leger,PexelVoyage vous accompagne.
        </p>

      </div>
    </div>
  )
}

export default Choisir