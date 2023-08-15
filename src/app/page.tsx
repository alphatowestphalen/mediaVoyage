import Navbar from "../components/navbar/page";
import Footer from '../components/footer/page'
import Header from "../components/header/Header";
import Parcours from "./parcour/Page";
import Newdose from "./nouveautés/page";
import Inspiration from "./inspiration/Inspiration";
import Contact from "@/components/contact/Contact";
import Choisir from "./choisir/Choisir";
import HeaderProps from "@/interfaces/HeaderProps.Interface";
import dataCars from "./data/dataCars";
import dataHeader from "./data/dataHeader";
import FormReservation from "./reservation/FormReservation";


const headerProps = dataHeader as HeaderProps[];
export default function Home() {
  return (
    <>
      <Navbar />
      {/* <FormReservation /> */}
      <Header header={headerProps}/>
      {/* <Detail />  */}
      <Parcours/>
      <Newdose />
      <Inspiration/>
      <Contact />
      <Choisir />
      <hr />
      <Footer /> 
    </>
  );
}
