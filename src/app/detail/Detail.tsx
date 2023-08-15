import CardDetails from '@/components/cardDetails/CardDetails'
import React from 'react'
import dataDetails from '../data/dataCardDeatails'
import CardDetailProps from '@/interfaces/CardDetailProps.interface';

// const cardDetails = dataDetails as CardDetailProps];
const dataDetailsProps = dataDetails as CardDetailProps[];


// const dataDetailsProps: CardDetailProps[] = dataDetails;
const Detail = () => {
  return (
    <div>
      <CardDetails cardesDetail={dataDetailsProps} />
    </div>
  )
}

export default Detail