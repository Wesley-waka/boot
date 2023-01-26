import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
const GET_PRODUCTS_BEGIN = 'GET_PRODUCTS_BEGIN'
const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],

}
const url = "http://localhost:8001/furniture"

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // DATA_TESTING

  // const ourProducts = fetch("http://localhost:8001/furniture")
  //   .then((r) => r.json())
  //   .then((products) => { return products })

  // console.log(ourProducts);

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN })
    const response = await axios.get(url)
    const products = response.data
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products })
  }



  useEffect(() => {
    fetchProducts(url)
  }, [])

  // console.log(state);
  return (
    <ProductsContext.Provider
      value={{
        ...state,

      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
