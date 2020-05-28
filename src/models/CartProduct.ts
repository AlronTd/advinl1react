import { IProduct } from "./IProduct";

export class CartProduct implements IProduct {
    readonly _id: string = '';
    name: string = '';
    short: string = '';
    desc: string = '';
    price: number = 0;
    image: string = '';
    quantity: number = 0

    readonly created?: Date;
    modified?: Date;
    __v?: number;

    constructor(product: IProduct) {
        this.quantity = 1
        
        try {
            this._id = product._id
            this.name = product.name
            this.short = product.short
            this.desc = product.desc
            this.price = product.price
            this.image = product.image

            if (product.hasOwnProperty('created')) {
                this.created = product.created
            }
            if (product.hasOwnProperty('modified')) {
                this.modified = product.modified
            }
            if (product.hasOwnProperty('__v')) {
                this.__v = product.__v
            }
        } catch {
            return { _id: '', name: '', short: '', desc: '', price: 0, image: '', quantity: 0 }
        }

        
    }
}