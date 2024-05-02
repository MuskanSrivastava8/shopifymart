import OrderData from "./OrderData";

let catagory =[];
catagory = OrderData.map((i)=>{return i.category})
catagory = [...new Set(catagory)];

export default catagory;




