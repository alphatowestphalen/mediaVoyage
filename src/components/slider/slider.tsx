"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import v4 from "../../../public/assets/images/slide/4x4.jpg";
import v2 from "../../../public/assets/images/slide/voiture2.jpg";
import v3 from "../../../public/assets/images/slide/voiture3.jpg";

// IMAGE EN FORMAT TABLEAU EN ATTENDANT LA BD
const slide = [
  {
    src: v4,
    description: `Une voiture 4x4, également connue sous le nom de véhicule
  tout-terrain (VTT) ou SUV (Sport Utility Vehicle), est un type de
  véhicule conçu pour offrir une conduite polyvalente sur différents
  types de terrains et dans des conditions variées. `,
  },
  {
    src: v2,
    description: `Une voiture 4x4, également connue sous le nom de véhicule
  tout-terrain (VTT) ou SUV (Sport Utility Vehicle), est un type de
  véhicule conçu pour offrir une conduite polyvalente sur différents
  types de terrains et dans des conditions variées.`,
  },
  { src: v3, description: "ljbjzjbfegvozebvlkazrpovibhrzqoibnaerh" },
];

const slider = () => {
  // Background et Description
  const [desc, setDesc] = useState(
    "absolute inset-0 items-center justify-center hidden"
  );
  const [desc2, setDesc2] = useState(
    "absolute inset-0 items-center justify-center hidden"
  );
  const [bg, setBg] = useState("");
  const [bg2, setBg2] = useState("");

  // Fonction pour afficher les description
  const showFirst = (event: any) => {
    setBg("blur-sm");
    setDesc("absolute inset-0 items-center justify-center");
  };
  const hideFirst = (event: any) => {
    setBg("");
    setDesc("absolute inset-0 items-center justify-center hidden");
  };

  const showSecond = (event: any) => {
    setBg2("blur-sm");
    setDesc2("absolute inset-0 items-center justify-center");
  };
  const hideSecond = (event: any) => {
    setBg2("");
    setDesc2("absolute inset-0 items-center justify-center hidden");
  };

  // INDEX DES IMAGES DU SLIDE
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(1);

  const Prev = () => {
    setIndex(index == 0 ? 2 : index - 1);
    setIndex2(index2 == 0 ? 2 : index2 - 1);
  };
  const Next = () => {
    setIndex(index == 2 ? 0 : index + 1);
    setIndex2(index2 == 2 ? 0 : index2 + 1);
  };

  return (
    <>
      <div>
        <h1 className="text-center text-2xl"> Nos voitures les plus confortables</h1>
        <div className="flex justify-center gap-10">
          <button onClick={Prev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* SLIDE VOITURE 1 */}
          <div className="relative lg:w-1/3 w-96 shadow-2xl">
            <Image
              src={slide[index]["src"]}
              width={700}
              height={700}
              alt="4x4"
              className={bg}
              onMouseEnter={showFirst}
            />
            <div className={desc} onMouseLeave={hideFirst}>
              <p className="text-black text-sm text-center items-center lg:text-2xl lg:pt-20">
                {slide[index]["description"]}
              </p>
            </div>
          </div>

          {/* SLIDE VOITURE 2 */}
          <div className="relative lg:w-1/3 w-96 shadow-2xl hidden lg:block">
            <Image
              src={slide[index2]["src"]}
              width={700}
              height={700}
              alt="4x4"
              className={bg2}
              onMouseEnter={showSecond}
            />
            <div className={desc2} onMouseLeave={hideSecond}>
              <p className="text-black text-sm text-center items-center lg:text-2xl lg:pt-20">
                {slide[index2]["description"]}
              </p>
            </div>
          </div>
          <button onClick={Next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default slider;
