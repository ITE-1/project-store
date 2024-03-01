import bomba from '../assets/YouMeals/bomba.png';
import chees from '../assets/YouMeals/chees.png';
import sity from '../assets/YouMeals/sity.png';
import strike from '../assets/YouMeals/strike.png';
import { GlobalContext } from './context/contextProvider';
import { useContext } from 'react';
export const CatalogBurger = () => {
    const {orderList, setOrderList, newOrderList} = useContext(GlobalContext);
const burgerData = [{
   id: Date.now(),  img: bomba, title: 'Мясная бомба', count: 600, weight: 520,
}, {
    id: Date.now(), img:chees,  title: 'Супер Сырный', count: 500, weight: 512,
},{
    id: Date.now(), img: sity,  title: 'Сытный', count: 639, weight: 580,
},{
    id: Date.now(), img: strike, title: 'Тяжелый удар', count: 480, weight: 470,
}]

    return (
        <div className='burger'>
        <h1>Burger</h1>
            <div className="burger__list">
                {burgerData.map((item, i) => {
                    return <div className="burger__list__item" key={i}>
                            <img src={item.img} alt={item.title}/>
                            <p style={{fontSize: '24px'}}>{item.count}</p>
                            <p style={{fontSize: '20px'}}>{item.title}</p>
                            
                            <span>{item.weight}</span>
                            <button onClick={(e) => newOrderList(item, e)}>добавить в корзину</button>
                         </div>
                })}
            </div>
        </div>
    )
}

export const CatalogZakuski = () => {


    return (
        <div>Zakuski</div>
    )
}
export const CatalogHotdog = () => {


    return (
        <div>Hot Dog</div>
    )
}
export const CatalogCombo = () => {


    return (
        <div>Combo</div>
    )
}
export const CatalogShaurma = () => {


    return (
        <div>Shaurma</div>
    )
}
export const CatalogPizza = () => {


    return (
        <div>Pizza</div>
    )
}

export const CatalogDessert = () => {


    return (
        <div>desert</div>
    )
}

