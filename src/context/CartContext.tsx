import { createContext, ReactNode, useContext, useState } from "react";

interface CartContextProps {
  children: ReactNode
}

interface CartItem {
  id: string
  quantity: number
}

interface CartContextType {
  getItemQuantity: (id: string) => number
  increaseCartQuantity: (id: string) => void
  decreaseCartQuantity: (id: string) => void
  removeItemCart: (id: string) => void
  resetCart: () => void
  cartItemsQuantity: number
  cartItems: CartItem[]
}

const CoffeeCartContext = createContext({} as CartContextType)

export function useCartContext() {
  return useContext(CoffeeCartContext)
}

export function CartContext({ children }: CartContextProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartItemsQuantity = cartItems.reduce((quantity, item) =>
    item.quantity + quantity, 0)

  function getItemQuantity(id: string) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id: string) {
    setCartItems(currentItems => {
      if (currentItems.find(item => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }]
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity(id: string) {
    setCartItems(currentItems => {
      if (currentItems.find(item => item.id === id)?.quantity === 1) {
        return currentItems.filter(item => item.id !== id)
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeItemCart(id: string) {
    setCartItems(currentItems => {
      return currentItems.filter(item => item.id !== id)
    })
  }

  function resetCart() {
    setCartItems([])
  }

  return (
    <CoffeeCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemCart,
        resetCart,
        cartItemsQuantity,
        cartItems
      }}
    >
      {children}
    </CoffeeCartContext.Provider>
  )
}