import React from "react";
import  "./Carde.css";

interface CardeProps {
  id: string;
  urlImg: string;
  dest: string;
  ville: string;
}
interface MyComponentProps{
  cardes: CardeProps[];
}

const Carde: React.FC<MyComponentProps> = ({ cardes }) => {
  return (
    <div className="grid grid-cols-3 m-5 gap-2">
      {cardes.map((data) => (
        <a href="/detail">
          <div key={data.id} className="relative carde">
            <div className="bgteste"></div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={data.urlImg}
              alt="tsy hita"
            />
            <div className="h-full absolute flex lieu w-full bottom-0 p-5">
              <div>
                <p className="text-xl font-bold">{data.dest}</p>
                <h3 className="">{data.ville}</h3>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Carde;
