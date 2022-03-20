import { shoppingCartApi } from "../../api/shoppingCartAPI";
import { INITCART,ADDTOCARTLIST } from "../../helper/constants";
import { ProductsApi } from "../../api/productsAPI";

export const initCartProducts = (dispatch) => async (cartProducts) =>{
    
    try {
        
       
        // console.log("shoppingCartApi.getAllProducts()0000000000",getCartProduct.length)
    
    
     const result = await shoppingCartApi.getAllShoppingCartProduct();
     

     try{
        const cartProductsItem = await Promise.all(result.cartProducts.map( (item, index) =>{

            console.log("test init cart products", item.productIndex);
            const product = ProductsApi.getProductsInfo(item.productIndex)
            return product;
        
        }));

        dispatch({
            type: INITCART,
            payload: cartProductsItem,
        })

     }catch(e){
        console.log(e)
     }

 }catch(e) {
     console.log(e)
 }
}

export const addProductToList = (dispatch) => async(index)=>{
    
    try{
        console.log("etewtewsdf........");
        const result = await shoppingCartApi.addProductToCart(index);
        console.log("etewtewsdf........",result);
        dispatch({
            type:ADDTOCARTLIST,
            payload:result.cartProducts,
        })

    }catch(e){
        console.log(e)
    }
    
}



