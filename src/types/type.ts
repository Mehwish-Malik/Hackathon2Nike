export default interface IProducts {
    _id:number
    inventory: number;
    productName: string;
    category: string;
    price: number;
    description: string;
    colors: string[];
    quantity:number,
    image: string;
    status: string;
   slug : {
    _type : "slug"
    current : string
   }
  }
  