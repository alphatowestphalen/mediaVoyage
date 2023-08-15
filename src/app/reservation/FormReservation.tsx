import HeaderProps from '@/interfaces/HeaderProps.Interface';
import React from 'react'
import dataHeader from '../data/dataHeader';
import NavBar from '../../components/navbar/page';
import Footer from "../../components/footer/page";
import Titre from '@/components/titre/Titre';
import ContenaireForm from './ContenaireForm';
import Header from '@/components/header/Header';

const headerProps = dataHeader as HeaderProps[];
const FormReservation = () => {
  return (
    <div>
      <NavBar />
      <Header header={headerProps}/>
      <Titre titre='RESERVATION' desc='Vous obliger remplire si vous avez fait la reservation' />
      <ContenaireForm />
      <hr />
      <Footer/>
    </div>
  )
}

export default FormReservation