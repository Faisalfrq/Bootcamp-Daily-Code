import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./Reducer";
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isLoading,setIsLoading]=useState(true)
    let [state, dispatch] = useReducer(reducer,
      {
        product: [],
        cart:[]
    })
  
    const fetchDataFromApi = async () => {
      const resp = await fetch('https://api.escuelajs.co/api/v1/products')
      const data = await resp.json()
      console.log(data);
      dispatch(
        {
          type:'Add_Product',
          payload:data
        }
        )
        setIsLoading(false)
    }
    useEffect(() => {
      fetchDataFromApi()
    },[])
    return (
      <AppContext.Provider value={{state,dispatch,isLoading }}>
        {children}
      </AppContext.Provider>
    );
  };
  export const UseGlobaldata = () => {
    return useContext(AppContext)
  }
  export { AppContext, AppProvider };