export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id) //returns either true (if it finds or undefined)

    if(existingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem 
        )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1 }]
}