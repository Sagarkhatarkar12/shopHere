import { defineStore } from "pinia";
export const useCartStore = defineStore("cart",{
    state:()=>({
        cartItems: [],
        totalPrice: 0,
        totalQuantity: 0,

    })
    ,
    actions:{
        addCart(id,name,price,quantity){
             const existingItem = this.cartItems.find(item => item.id === id);
            //  return existingItem
            if(existingItem){
                return alert("card is already added");
            }
            else{

                this.cartItems.push({
                    id: id,
                    name: name,
                    price: price,
                    quantity: quantity
                });
                this.totalPrice +=( price * quantity);
                this.totalQuantity += quantity;
            }
        }
        ,
        removeCart(id){
            const itemIndex = this.cartItems.findIndex(item => item.id === id);
            if(itemIndex  !== -1){
                const item = this.cartItems[itemIndex];
                this.totalPrice -= item.price * item.quantity;
                this.totalQuantity -= item.quantity;
                this.cartItems.splice(itemIndex, 1);
            }
            

        }
    }
})