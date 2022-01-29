export interface IProducts {
    cart: number;
    id: string;
    price: string;
    product: string;
    stock: number;
}

export interface IShoppingCart {
    id: string;
    price: string;
    product: string;
    stock: number;
    cart:number;
}

export interface IState {
    products: IProducts[]
    shoppingCart: IShoppingCart[]
} 