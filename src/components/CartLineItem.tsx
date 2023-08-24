import { ReactElement } from "react"
import { CartItemType } from "../context/CartProvider"
import { ReducerAction } from "../context/CartProvider"
import { ReducerActionType } from "../context/CartProvider"

type PropsType = {
  item: CartItemType,
  dispatch: React.Dispatch<ReducerAction>,
  REDUCER_ACTIONS: ReducerActionType,
}

const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {

  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url).href

  const lineTotal: number = (item.qty * item.price)

  const highestQty: number = 20 > item.qty ? 20 : item.qty

  const optionValues: number[] = [...Array(highestQty).keys()].map(i => i + 1)

  const options: ReactElement[] = optionValues.map(val => {
    return <option key={`opt${val}`} value={val}>{val}</option>
  })

  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) }
    })
  }

  return (
    <div></div>
  )
}

export default CartLineItem
