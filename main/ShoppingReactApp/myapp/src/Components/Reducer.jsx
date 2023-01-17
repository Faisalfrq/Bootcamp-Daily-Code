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

      default:
         return state
   }
}


