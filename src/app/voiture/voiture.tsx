import Header from '@/components/header/Header';
import React from 'react'
import Navbar from '../../components/navbar/page'
import Car_detail from "../../interfaces/Car_detail.inteface";
import cars from '../data/carsListe';
import CardDetailsCar from './cardDetailsCars/CardDetails';
import Detail from '../detail/Detail';
import HeaderProps from '@/interfaces/HeaderProps.Interface';
import dataHeader from '../data/dataHeader';
import dataCars from '../data/dataCars';
import Filter from '../filtre/filter';

const data_Cart_Props: Car_detail[] = cars;
const headerProps: HeaderProps[] = dataCars;
const Voiture = () => {
  return (
    <div>
      <Navbar />
      <Header header={headerProps} />

      <div className='flex'>
        <Filter />
        <div>
          <CardDetailsCar cardesDetailCar={data_Cart_Props} />
        </div>
      </div>
    </div>
  )
}

export default Voiture;