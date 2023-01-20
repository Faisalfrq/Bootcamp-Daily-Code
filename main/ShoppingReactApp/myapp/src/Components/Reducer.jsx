// const reducer=(state,action)=>{
//     switch(action){
//          case 'incre':
//             return state+=1
//          case 'decre':
//             return state-=1;
//          case 'reset':
//             return state=0;
//          default:
//             return state;
//     }
// }
export const reducer = (state, action) => {
   switch (action.type) {
      case 'Add_Product':
         return {
            ...state,
            products: action.payload
         }
      case 'add-to-cart':
         return{
            ...state,
            cart:[...state.cart,{...action.payload,qty:1}]
         }
      case 'remove-from-cart':
         return {
            ...state,
            cart: [...state.cart.filter((item)=>item.id!== action.payload.id)]
         };
      case 'add-quantity':
         return{
            ...state,
            cart:[...state.cart,{...action.payload}]
         }

      default:
         return state
   }
}


