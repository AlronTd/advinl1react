export interface IProduct{
    _id: string,
    name: string,
    short: string,
    desc: string,
    price: number,
    image: string,
    
    created?: Date,
    modified?: Date,
    __v?: number
}