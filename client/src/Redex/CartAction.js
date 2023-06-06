export function addtocart(image,title,price){
    return {
        type:"Add_Item_To_Cart",
        item:{
            image:image,
            title:title,
            price:price
        }

    }
}
export function removefromcart(){
    return{
        type:"Remove_Item_From_Cart"
    }
}