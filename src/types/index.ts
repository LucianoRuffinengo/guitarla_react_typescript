export type Guitar = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number
}

//Herencia 
//en type
export type CartItem = Guitar &{
    quantity: number
}
//con utility types
//pick
// export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'>{
//     quantity: number
// }
//-------
//omit
// export type CartItem = Omit<Guitar, 'id' | 'name' | 'price'>{
//     quantity: number
// }


//en interface
// export interface CartItem extends Guitar &{
//     quantity: number
// }

// export type GuitarId = Guitar['id']