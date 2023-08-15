import React from "react";
import Header from "@/components/header/Header";
import dataHeader from "../data/dataHeader";
import HeaderProps from "@/interfaces/HeaderProps.Interface";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";

const HeaderProps = dataHeader as HeaderProps[];
const DescriptionParcours = () => {
  return (
    <>
      <Navbar />
      <Header header={HeaderProps} />
      <div className=" w-11/12 ml-16 flex mb-9 justify-center">
        <div className="w-9/12">
          <hr />
          <h1 className="mt-5 italic text-xl font-bold ">
            Antananarivo-Antsirabe-Fianarantsoa-Ranohira-Ifaty-Tulear-Antanarivo
          </h1>
          <p>
            Dés <strong>1221€</strong>-10jours / 7 nuits + Pension selon
            programme Transfert inclus
          </p>
          <div>
            <p>Image slide</p>
          </div>
          <hr />
          <div className="shadow-amber-300 p-5">
            <div className="mb-5">
              <h1 className="flex justify-center text-xl font-bold p-5">
                Résumé
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                harum nemo repellendus et voluptate eum praesentium! Inventore
                est saepe adipisci cumque iste voluptates. Vel ipsum adipisci
                odit. Nisi, sequi est! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Commodi cumque quibusdam nobis sint officia
                aliquam quia quidem, ab eligendi facere quod temporibus vel
                fugiat labore harum iure mollitia dolores voluptatibus. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Maxime cum
                officiis labore, nesciunt odio hic ea iusto rerum, numquam,
                beatae culpa impedit! Nobis, repudiandae sit! Neque officiis ea
                necessitatibus ab?
              </p>
              <p className="mt-5">
                <strong>Date de départ 2023</strong>
              </p>
              <p className="text-sm">
                Du 2 au 9 janvier 2023, Du 12 au 15 janvier 2023, Du 20 au 29
                janvier 2023,
              </p>
              <p className="text-sm">
                Du 2 au 9 fervier 2023, Du 12 au 15 fervier 2023
              </p>
              <p className="text-sm">
                Du 2 au 9 Mars 2023, Du 12 au 15 Mars 2023, Du 20 au 29 Mars
                2023,
              </p>
              <p className="text-sm">
                Du 12 au 15 Avril 2023, Du 23 au 26 Avril 2023, Du 26 au 31
                Avril 2023,
              </p>
              <p className="text-sm">
                Du 2 au 9 janvier 2023, Du 12 au 15 janvier 2023, Du 20 au 29
                janvier 2023,
              </p>
              <p className="text-sm">
                Du 2 au 9 fervier 2023, Du 12 au 15 fervier 2023
              </p>
              <p className="text-sm">
                Du 2 au 9 Mars 2023, Du 12 au 15 Mars 2023, Du 20 au 29 Mars
                2023,
              </p>
              <p className="text-sm">
                Du 12 au 15 Avril 2023, Du 23 au 26 Avril 2023, Du 26 au 31
                Avril 2023,
              </p>
            </div>
            <hr />
            <div>
              <h1 className="flex justify-center text-xl font-bold p-5">
                Desriptif
              </h1>
              <p>
                <strong>Votre programme</strong>
              </p>
              <p className="text-red-600 mt-1 font-semibold">
                Jour 1: Antanarivo
              </p>
              <p className="text-sm mt-1">
                Départ à destination de Antananarivo sur vol réguilier. À
                l'arrivée, acceuil et transfert au port de Antananarivo(capitale
                de madagascar). Embarquement à bord du M/S Queen Isabel.INstallation et cocktail de bienvenue. Diner à bord.
              </p>
              <p className="text-red-600 mt-1 font-semibold">
                Jour 2: Anstirabe
              </p>
              <p className="text-sm  mt-1">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa suscipit reiciendis expedita quasi. Aliquam molestiae vel <strong> optio porro impedit distinctio </strong>, animi debitis hic saepe cupiditate eos. Itaque, deleniti error!
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus vel eligendi aliquid alias et, rem, nostrum totam tenetur exercitationem possimus repellat beatae. Iusto, mollitia quam. Ratione esse vitae atque. Incidunt.
              </p>
              <p className="text-red-600 mt-1 font-semibold">
                Jour 3: Fianarantsoa
              </p>
              <p className="text-sm  mt-1">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa suscipit reiciendis expedita quasi. Aliquam molestiae vel <strong> optio porro impedit distinctio </strong>, animi debitis hic saepe cupiditate eos. Itaque, deleniti error!
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus vel eligendi aliquid alias et, rem, nostrum totam tenetur exercitationem possimus repellat beatae. Iusto, mollitia quam. Ratione esse vitae atque. Incidunt.
              </p>
              <p className="text-red-600 mt-1 font-semibold">
                Jour 4: Ranohira
              </p>
              <p className="text-sm  mt-1">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa suscipit reiciendis expedita quasi. Aliquam molestiae vel <strong> optio porro impedit distinctio </strong>, animi debitis hic saepe cupiditate eos. Itaque, deleniti error!
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus vel eligendi aliquid alias et, rem, nostrum totam tenetur exercitationem possimus repellat beatae. Iusto, mollitia quam. Ratione esse vitae atque. Incidunt.
              </p>
              <p className="text-red-600 mt-1 font-semibold">
                Jour 5: Ifaty
              </p>
              <p className="text-sm  mt-1">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa suscipit reiciendis expedita quasi. Aliquam molestiae vel <strong> optio porro impedit distinctio </strong>, animi debitis hic saepe cupiditate eos. Itaque, deleniti error!
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus vel eligendi aliquid alias et, rem, nostrum totam tenetur exercitationem possimus repellat beatae. Iusto, mollitia quam. Ratione esse vitae atque. Incidunt.
              </p>
              <p className="text-red-600 mt-1 font-semibold">
                Jour 6: Tulear
              </p>
              <p className="text-sm  mt-1">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa suscipit reiciendis expedita quasi. Aliquam molestiae vel <strong> optio porro impedit distinctio </strong>, animi debitis hic saepe cupiditate eos. Itaque, deleniti error!
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus vel eligendi aliquid alias et, rem, nostrum totam tenetur exercitationem possimus repellat beatae. Iusto, mollitia quam. Ratione esse vitae atque. Incidunt.
              </p>
              <p className="text-red-600 mt-1 font-semibold">
                Jour 7: Antanarivo
              </p>
              <p className="text-sm  mt-1">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa suscipit reiciendis expedita quasi. Aliquam molestiae vel <strong> optio porro impedit distinctio </strong>, animi debitis hic saepe cupiditate eos. Itaque, deleniti error!
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus vel eligendi aliquid alias et, rem, nostrum totam tenetur exercitationem possimus repellat beatae. Iusto, mollitia quam. Ratione esse vitae atque. Incidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
};
export default DescriptionParcours;
