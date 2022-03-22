import { shoppingCartApi } from "./shoppingCartAPI";
export const ProductsApi = {
    products: [
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '124', productName: 'apple iphone11', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory1", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '220', productName: 'apple iphone12', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory2", item: 10, addOnitem: 1 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '243', productName: 'apple iphone13', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory3", item: 10, addOnitem: 2 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '294', productName: 'apple iphone11', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory1", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '324', productName: 'apple iphone12', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory2", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '249', productName: 'apple iphone13', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory3", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '124', productName: 'apple iphone11', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory1", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '220', productName: 'apple iphone12', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory2", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '243', productName: 'apple iphone13', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory3", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '294', productName: 'apple iphone11', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory1", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '324', productName: 'apple iphone12', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory2", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '249', productName: 'apple iphone13', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory3", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '124', productName: 'apple iphone11', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory1", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '220', productName: 'apple iphone12', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory2", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '243', productName: 'apple iphone13', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory3", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '294', productName: 'apple iphone11', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory1", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '324', productName: 'apple iphone12', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory2", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '249', productName: 'apple iphone13', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory3", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '124', productName: 'apple iphone11', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory1", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '220', productName: 'apple iphone12', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory2", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '243', productName: 'apple iphone13', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory3", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '294', productName: 'apple iphone11', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory1", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '324', productName: 'apple iphone12', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory2", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '249', productName: 'apple iphone13', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory3", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '124', productName: 'apple iphone11', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory1", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '220', productName: 'apple iphone12', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory2", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '243', productName: 'apple iphone13', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory3", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '294', productName: 'apple iphone11', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory1", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '324', productName: 'apple iphone12', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory2", item: 10, addOnitem: 0 },
        { imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', price: '249', productName: 'apple iphone13', productDescrip: "dfrwerqwer,werqerewtfdsfs", category: "Caltegory3", item: 10, addOnitem: 0 },


    ],

    getAllProducts: async function () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ products: this.products });
            }, 500);
        });
    },

    getProductsInfo: async function (index) {
        console.log("test index in api", index, this.products.length)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!Number.isInteger(index) ||
                    index < 0 ||
                    index >= this.products.length) {
                    reject({ error: 'index is not valid!' });
                    return;
                }
                const product = this.products[index];
                resolve({ product: product });

            }, 500);
        })
    },

    addProduct: async function (product) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!product || !product.content) {
                    reject({ error: 'content is empty!' });
                    return;
                }
                this.products.unshift(product.content);
                resolve({ addProduct: 'succeed' });
            }, 500);
        });
    },

    addProductToCart: async function (index) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!Number.isInteger(index) ||
                    index < 0 ||
                    index >= this.products.length) {
                    reject({ error: 'index is not valid!' });
                    return;
                }
                if (this.products[index].item > this.products[index].addOnitem) {
                    this.products[index].addOnitem = this.products[index].addOnitem + 1;

                }
                console.log(this.products, "'''....")
                resolve({ products: this.products });
            }, 500);
        });
    },

    minusProductToCart: async function (index) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!Number.isInteger(index) ||
                    index < 0 ||
                    index >= this.products.length) {
                    reject({ error: 'index is not valid!' });
                    return;
                }
                if (this.products[index].addOnitem > 0) {
                    this.products[index].addOnitem = this.products[index].addOnitem - 1;
                }

                resolve({ products: this.products });
            }, 500);
        });
    },

    removeItem: async function (index) {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if (!Number.isInteger(index) ||
                    index < 0 ||
                    index >= this.products.length) {
                    reject({ error: 'index is not valid!' });
                    return;
                }             
                    this.products[index].addOnitem = 0;
                //console.log(this.products, "'''....")
                resolve({ products: this.products });
            }, 500);
        })
    }

}