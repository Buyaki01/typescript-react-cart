import { ProductType } from "../context/ProductsProvider"
import { ReducerActionType, ReducerAction } from "../context/CartProvider"
import { ReactElement } from "react"

type PropsType = {
  product: ProductType,
  dispatch: React.Dispatch<ReducerAction>,
  REDUCER_ACTIONS: ReducerActionType,
  inCart: boolean,
}

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {

  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href
  console.log(img)

  const onAddToCart = () =>  dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })

  const itemInCart = inCart ? ' → Item in Cart: ✔️' : null

  return (
    <div></div>
  )
}

export default Product
