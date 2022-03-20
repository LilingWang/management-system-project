import { INIT,GETINFO, ADD,ADDTOCART,MINUSTOCART,REMOVEITEM } from "../helper/constants";
import {ProductsApi} from "../api/productsAPI";

export const initProducts = (dispatch) => async(products) =>{
    console.log("test......."+ProductsApi.getAllProducts)
    try {
        const result = await ProductsApi.getAllProducts();
        console.log(result, ".........",result.products)
        dispatch({
            type: INIT,
            payload:result.products,
        })

    }catch(e) {
        console.log(e)
    }
}

export const getProductsInfo = (dispatch) => async(index)=>{
    try {
        console.log("test index========================", index)
        const result = await ProductsApi.getProductsInfo(index);
        console.log("get product info", result.product);
        dispatch({
            type:GETINFO,
            payload:result.product,
        })
    }catch(e){
        console.log(e);

    }
}

export const addProduct = (dispatch)=> (value)=>{
    ProductsApi
    .addProduct({
        content:value,
    })
    .then(()=>{
        dispatch({
            type:ADD,
            payload: {
                content:value,
            }

        });
        
    })
    .catch((e)=>{
        console.log(e)
    });    
}

export const addProductToCart = (dispatch) => async(index)=>{
    console.log(index)
    try{

        const result = await ProductsApi.addProductToCart(index);
        console.log("etewtewsdf",result);
        dispatch({
            type:ADDTOCART,
            payload:result.products,
        })

    }catch(e){
        console.log(e)
    };
    
}

export const minusProductToCart = (dispatch) => async(index)=>{
    console.log(index)
    try{

        const result = await ProductsApi.minusProductToCart(index);
        console.log("etewtewsdf-----------",result);
        dispatch({
            type:MINUSTOCART,
            payload:result.products,
        })

    }catch(e){
        console.log(e)
    };
    
}

export const removeItemFromCart = (dispatch) => async(index) =>{
    console.log(index);
    try{
        const result = await ProductsApi.removeItem(index);
        dispatch({
            type:REMOVEITEM,
            payload:result.products,
        })
    }catch(e){
        console.log(e);
    }
}