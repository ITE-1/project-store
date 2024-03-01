import { useState } from 'react';
import strike from '../assets/YouMeals/strike.png';
import { useContext } from 'react';
import { GlobalContext } from './context/contextProvider';
export const QuantityInput = ({ initialValue, onIncrease, onDecrease }) => {
    
    const {quantity, setQuantity} = useContext(GlobalContext);
    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        console.log(value)
        setQuantity(isNaN(value) ? 1 : value);
    };
    
     

return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey', height: '20px'}}>
      <button onClick={onDecrease}>-</button>
      <input
        style={{width: '30px'}}
        type="number"
        value={1}
        onChange={handleInputChange}
      />
      <button onClick={onIncrease}>+</button>
    </div>
  );
}

const MarketPlace = () => {
const {ordersList, setOrderList, quantity, setQuantity} = useContext(GlobalContext);
const [hide, setHide] = useState(true);
//////////////////////////
const handleIncreaseQuantity = (itemId, initialValue) => {
    setQuantity(quantity + 1)
    setOrderList((prevOrderList) =>
      prevOrderList.map((item) =>
        item.id === itemId ? { ...item, count: item.count + initialValue } : item
      )
    );
  };

  const handleDecreaseQuantity = (itemId, initialValue) => {

    setQuantity(quantity - 1)
    setOrderList((prevOrderList) =>
      prevOrderList.map((item) =>
        item.id === itemId && item.count > 1
           ? { ...item, count: item.count - initialValue }
          : item
      )
    );
  };
////////////////////////
const handleClickHide = () => {
   setHide((e) => !e)
}
const renderList = (orderList) => {

    console.log(orderList)  
    
}
const handleRemoveItem = (itemId) => {
    setOrderList((prevOrderList) =>
      prevOrderList.filter((item) => item.id !== itemId)
    );
  };

  const calculateTotal = () => {
    let total = 0;
    ordersList.forEach((item) => {
        total += item.count
    });
    return total;
  }
    return(
        <div className="marketplace">
            {/* <button onClick={() => renderList(ordersList)}>getinfo</button> */}
            <div className="marketplace__title"><h2>Корзина</h2> <span>{ordersList.length}</span></div>
            <div className={`marketplace__order ${hide ? 'hide' : ''}`}>
            <div className='marketplace__list'>
                {/* {renderList(orderList)} */}
                {ordersList && ordersList.map((item, i) => {
                    return   <div className='marketplace__item' key={item.id}>
                        <span 
                        onClick={() => handleRemoveItem(item.id)}
                        className='marketplace__item__delete'>delete</span>
                    <img src={item.img} />
                    <div className='marketplace__dscr'>  
                     <span>{item.title}</span>
                    <p>{item.weight}</p>
                    <p>{item.count}</p>
                    </div>
                    <QuantityInput 
                    initialValue={item.count}
                    onIncrease={() => handleIncreaseQuantity(item.id)}
                    onDecrease={() => handleDecreaseQuantity(item.id)}
                    />
                 
                </div>
                } )}
           
            {/* <div className="marketplace__item">
                <img src={strike} />
                <div className='marketplace__dscr'>  
                 <span>Супер сырный</span>
                <p>512</p>
                <p>500p</p>
                </div>
                <QuantityInput />
             
            </div>
            <div className="marketplace__item">
                <img src={strike} />
                <div className='marketplace__dscr'>  
                 <span>Супер сырный</span>
                <p>512</p>
                <p>500p</p>
                </div>
                <QuantityInput />
             
            </div> */}
            </div>
          
            <div className='marketplace__deposit'>
                <h3>Итого -</h3> <span>{calculateTotal()}</span>
            </div>
            <button className='marketplace__button'>Оформить заказ</button>
           
            </div>
            <span className='marketplace__hide' onClick={handleClickHide}>{hide ? <span>развернуть</span> : <span>Свернуть</span>} </span>
        </div>
    )
}

export default MarketPlace;