import CadreDose from '@/components/cadreDos/CadreDose'
import React from 'react'

const Newdose = () => {
    return (
        <div className='newdose bg-blue-800 p-3'>
            <div className='titre mt-12 '>
                <h1 className="font-poppins w-full text-center text-3xl text-white font-bold">UNE DOSE DE NOUVEAUTES</h1>
                <p className="w-full text-center mb-10 text-white italic">Envies du moment</p>
            </div>
            <CadreDose/>
        </div>
    )
}

export default Newdose