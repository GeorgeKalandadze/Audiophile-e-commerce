import CategoriesCards from '../../components/CategoriesCards/CategoriesCards'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ItemCard from '../../components/ItemCard/ItemCard'
import PersonCard from '../../components/PersonCard/PersonCard'
import { useGlobalContext } from '../../context'

type ProductPagePropTypes = {
  productType:string
}

const ProductsPage = ({productType}:ProductPagePropTypes) => {
  const {products} = useGlobalContext()
  const productsList = products.filter((product) =>product.category === productType )

  return (
    <>
      <Header headerText={productType}/>
      <div className='boxes'>
      {
       productsList.map((item) => (
          <ItemCard
            slug={item.slug}
            isNew={item.new}
            key={item.id}
            itemImage={item.cart_image}
            productName={item.name}
            productText={item.description}
            categoryName={item.category}
          />
        ))
      }
      </div>
      <CategoriesCards/>
      <PersonCard/>
      <Footer/>
    </>
    
  )
}

export default ProductsPage
