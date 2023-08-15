import React from 'react'
import Detail from './Detail'
import NavBar from "../../components/navbar/page";
import dataHeader from '../data/dataHeader';
import HeaderProps from '@/interfaces/HeaderProps.Interface';
import Header from '@/components/header/Header';
import Titre from '@/components/titre/Titre';
import Footer from '../../components/footer/page';

const headerProps = dataHeader as HeaderProps[];
const Page = () => {
  return (
    <div>
      <NavBar />
      <Header header={headerProps}/>
      <Titre titre='LISTE PARCOURS' desc='' />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
      <hr />
      <Footer />
    </div>
  )
}

export default Page