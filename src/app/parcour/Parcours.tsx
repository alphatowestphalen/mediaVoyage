import Carde from '@/components/Carde/Carde';
import React from 'react';
import Titre from '@/components/titre/Titre';
import dataParcour from '../data/dataParour';

const dataProps: dataParcour[] = dataParcour;
const Parcours: React.FC = () => {
  return (
    <div className="parcours">
      <Titre desc="Par tous a madagascar" titre="PARCOUREZ" />
      <Carde cardes={dataProps} />
    </div>
  );
};

export default Parcours;
