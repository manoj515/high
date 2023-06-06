const intialState={
    cart:[]
}

export function CartReducer (state=intialState,action) {
    switch(action.type){
        case "Add_Item_To_Cart":
            return{
                ...state,cart: [...state.cart,action.item]
            }
        case "Remove_Item_From_Cart":
            return{
    
            }
        default:
        return state
    }
}

export default CartReducer
