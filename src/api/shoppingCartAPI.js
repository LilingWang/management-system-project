export const shoppingCartApi = {
    cartProducts : [{productIndex: 1, addItm:0},
        {productIndex: 3, addItm:0},
        {productIndex: 5, addItm:0},
    ],

    getAllShoppingCartProduct: async function () {
         console.log("test cart products........")
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({cartProducts:this.cartProducts});
            }, 500);
        });
    },

    addProductToCart: async function (productsIndex) {
       // console.log(productsIndex,"test productsindex")
        return new Promise((resolve, reject)=>{
            setTimeout(()=> {
               // console.log(productsIndex,"test productsindex")
                if (!Number.isInteger(productsIndex)) {
                    reject({ error: 'index is not valid!' });
                    return;
                }/*
                this.cartProducts.push({
                    productIndex: productsIndex,
                    addItm:0
                })*/
               // console.log(this.cartProducts,"test....push")
                resolve({cartProducts:this.cartProducts});
            },500);

        });
    },

}


