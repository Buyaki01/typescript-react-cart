import useCart from "../hooks/useCart"
import useProducts from "../hooks/useProducts"
import { UseProductsContextType } from "../context/ProductsProvider"
import { ReactElement } from "react"
import Product from "./Product"

const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart} = useCart()
  const { products } = useProducts()

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

  if (products?.length) {
    pageContent = products.map(product => {
      const inCart: boolean = cart.some(item => item.sku === product.sku) //The .some() method in JavaScript and TypeScript always returns either true or false. It's used to determine whether at least one element in an array satisfies a given condition

      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      )
    })
  }

  const content = (
    <main className="main main--products">
      {pageContent}
    </main>
  )

  return content
}   

export default ProductList
