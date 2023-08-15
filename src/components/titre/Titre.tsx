import React from 'react'

interface MyComponentProps {
  titre: string;
  desc: string;
}
const Titre: React.FC<MyComponentProps> = (MyComponentProps) => {
  return (
    <div className='titre mt-12 '>
      <h1 className="font-poppins w-full text-center text-3xl text-blue-700 font-bold">{ MyComponentProps.titre }</h1>
      <p className="w-full text-center mb-10 italic">{ MyComponentProps.desc }</p>
    </div>
  ) 
}

export default Titre