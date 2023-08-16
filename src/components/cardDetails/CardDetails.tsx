import CardDetailProps from '@/interfaces/CardDetailProps.interface';
import React from 'react'
import './CardDetails.css'
import Link from 'next/link';

  
interface MyComponentProps {
  cardesDetail: CardDetailProps[];
}
const CardDetails: React.FC<MyComponentProps> = ({ cardesDetail }) => {
  return (
    <>
      <div className='cardDetails'>
        {cardesDetail.map((data) => (
          <Link key={data.id} href="/desrciptionParcours">
            <div  className=" flex card">
              <div>
                <img
                  className="h-60"
                  src={data.urlImg}
                  alt="tsy hita"
                />
              </div>
              <div className='description'>
                <div className='desch3p'>
                  <h3><strong>{data.titre}</strong></h3>
                  <p><strong>{data.parcours}</strong></p>
                </div>
                <div className='liste mt-4'>
                  {data.list.map((item) => (
                    <ul className='list-disc mt-2'>
                      <li>{item}</li>
                    </ul>
                  ))}
                </div>
                <div className='flex justify-between mt-6'>
                  <div>
                    <p className='datadesc'>{data.desc}</p>
                    <p className='datadesc'>{data.deplacement}</p>
                  </div>
                  <p className=''><strong>{data.prix}</strong></p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>   
    </>
  )
}

export default CardDetails