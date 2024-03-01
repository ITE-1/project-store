import React, {createContext, useContext, useState} from 'react';

 export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    
    const [ordersList, setOrderList] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const newOrderList = (item, e) => {
        e.preventDefault()
        setOrderList((prevOrdersList) => [...prevOrdersList, item]);
        console.log(ordersList, item)

    }
    const changeQuantity = () => {


    }
        return <GlobalContext.Provider value={{ordersList, setOrderList, newOrderList,quantity,setQuantity}} >{children}</GlobalContext.Provider>
}



