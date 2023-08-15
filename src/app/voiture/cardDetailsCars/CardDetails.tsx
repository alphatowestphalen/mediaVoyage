import CardDetailProps from '@/interfaces/CardDetailProps.interface';
import React from 'react'
import './CardDetails.css'
import Car_detail from '@/interfaces/Car_detail.inteface';


interface MyComponentProps {
  cardesDetailCar: Car_detail[];
}
const CardDetailsCar: React.FC<MyComponentProps> = ({ cardesDetailCar }) => {
  return (
    <>
      {
        cardesDetailCar.map((data) => (
          <div className='cardDetails'>
            <div key={data.id} className="flex w-full  card">
              <div>
                <img
                  className="h-56"
                  src={data.urlImg}
                  alt="tsy hita"
                />
              </div>
              <div className='description'>
                <div className='desch3p'>
                  <h3 className=''><strong>{data.nom}</strong></h3>
                  <p>ou {data.vitesse}</p>
                  <div className='icone'>
                    <span >
                      <svg className="w-4 h-4 mr-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                        <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                      </svg>
                      {data.nbr_personne}
                    </span>
                    <span >
                      <svg className="w-4 h-4 mr-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                      </svg>
                      {data.bagage}
                    </span>
                    <span >
                      <svg className="w-4 h-4 mr-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 7.828 1h8.239A.969.969 0 0 1 17 2v16a.969.969 0 0 1-.933 1H3.933A.97.97 0 0 1 3 18v-2M8 1v4a1 1 0 0 1-1 1H3m-2 6h10M9.061 9.232 11.828 12l-2.767 2.768" />
                      </svg>
                      {data.porte}
                    </span>
                    <span >
                      <svg className="w-4 h-w-4 mr-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17V1m0 0L1 4m3-3 3 3m4-3h6l-6 6h6m-7 10 3.5-7 3.5 7m-6.125-2H16" />
                      </svg>
                      {data.vitesse}
                    </span>
                    <span >
                      <svg className="w-4 h-4 mr-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z" />
                      </svg>
                      {data.climatisation}
                    </span>
                  </div>
                  <div className='mt-6 flex items-center gap-4'>
                    <div>
                      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1M5 19h5m-9-9h5m4-4h8a1 1 0 0 1 1 1v12H9V7a1 1 0 0 1 1-1Zm6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p>Fianarantsoa Mediapixel, Madagascar</p>
                      <span className='text-slate-400 text-sm'>À 2,8 km du centre-ville</span>
                    </div>
                  </div>
                  <div>
                    <h4>Excellente offre </h4>
                    <div className='flex gap-9 mt-2'>
                      <ul className='list-disc'>
                        <li>Annulation gratuite (48h)</li>
                        <li>Réservoir {data.reservoir} </li>
                        <li>{data.consommation}</li>
                      </ul>
                      <ul className='list-disc'>
                        <li>Protection contre le vol</li>
                        <li>Assurance de responsabilité civile</li>
                        <li>Assurance collision (Aro)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='liste'>
                  <ul className='list-disc'>
                    {/* <li>{data.vitesse}</li>
                    <li>{data.bagage}</li>
                    <li>{data.porte}</li> */}
                  </ul>
                </div>
                <div className='flex justify-between'>
                  <div>
                    {/* <p className='datadesc'>{data.reservoir}</p>
                    <p className='datadesc'>{data.consommation}</p> */}
                  </div>
                  {/* <p className=''><strong>{data.cout_location}</strong></p> */}
                </div>
              </div>
              <div className='flex prix'>
                <div >
                  <p>Ar {data.id}000.00</p>
                  <span>Total</span>
                </div>

              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default CardDetailsCar