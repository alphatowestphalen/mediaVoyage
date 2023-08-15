"use client";
import dataHeader from "@/app/data/dataHeader";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./Header.css";
import HeaderProps from "@/interfaces/HeaderProps.Interface";

interface MyComponentProps {
  header: HeaderProps[];
}
const Header: React.FC<MyComponentProps> = ({header}) => {
  const [moveBg, setMoveBg] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (moveBg === 4) {
        setMoveBg(0);
      } else {
        setMoveBg(moveBg + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [moveBg]);

  return (
    <section className="flex justify-around">
      <div className="hieder relative m-5  h-96 w-full ">
        <Image
          className="transitions "
          src={header[moveBg].urlImg}
          alt="Image de fond"
          layout="fill"
          objectFit="cover"
        />
        <div className="bg-slate-200 opacity-90  absolute top-1/3 left-1/3  w-1/3 p-5">
          <h1 className="font-poppins w-full text-center text-3xl text-blue-700 font-bold">
            {header[moveBg].titre}
          </h1>
          <p className="w-full text-center mt-3 italic">
            {header[moveBg].desc}
          </p>
        </div>
        {/* champ */}
        <div className="champ ">
          <form action="" className="absolute flex top-72  h-20 w-full gap-8">
            <div className="relative z-0 w-52  group">
              <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DESTINATION</label>
            </div>
            <div className="relative z-0 w-52  group">
              <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">VILLE DE DEPART </label>
            </div>
            <div className="relative z-0 w-52  group">
              <input type="date" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DATE DE DEPART</label>
            </div>
            <div className="relative z-0 w-52  group">
              <input type="number" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DUREE DU SEJOUR </label>
            </div>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
              </svg>
              Recherche
            </button>
          </form>
        </div>
        {/* end champ */}
      </div>
    </section>
  );
};

export default Header;
