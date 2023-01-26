import React from 'react'
import { useFilterContext } from '../context/filter_context'
import ListView from './ListView'

const ProductList = () => {
  const { filtered_products: products,
  } = useFilterContext()
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search...
      </h5>
    )
  }
  return (<ListView products={products} />)

}

export default ProductList
