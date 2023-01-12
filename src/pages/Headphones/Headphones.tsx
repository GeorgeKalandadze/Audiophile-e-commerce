import React from 'react'
import Header from '../../components/Header/Header'
import ItemCard from '../../components/ItemCard/ItemCard'
import { useGlobalContext } from '../../context'

const Headphones = () => {
  const {productsData} = useGlobalContext()
  const headPhoneProducts = productsData.filter((product) =>product.category === "headphones" )
  headPhoneProducts.map((gugu) => {
    console.log(gugu.image.mobile)
  })
  return (
    <div>
      <Header headerText='HEADPHONES'/>
      {
        headPhoneProducts.map((headphone) => (
          <ItemCard
            isNew={headphone.new}
            key={headphone.id}
            itemImage={headphone.image.desktop}
            productName={headphone.name}
            productText={headphone.description}
          />
        ))
      }
      
    </div>
  )
}

export default Headphones