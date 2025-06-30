import React from 'react'
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";


const Customers = () => {
  return (
    <div className='container mx-auto my-20 mt-12'>
      <Title addClass="text-[40px] text-center">Müşterilerimiz Ne Düşünüyor ?</Title>
      <div className='flex gap-x-10'>
        <CustomerItem imgSrc="/images/client1.jpg" />
        <CustomerItem imgSrc="/images/client2.jpg" />
      </div>
    </div>
  )
}

export default Customers
