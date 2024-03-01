import { useState, useContext } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.scss';
import Burger from './assets/pic.png';
import pizza from './assets/YouMeal/Пицца.png';
import zakus from './assets/YouMeal/Закуски.png';
import hotdog from './assets/YouMeal/Хот-доги.png';
import combo from './assets/YouMeal/Комбо.png';
import shaurma from './assets/YouMeal/Шаурма.png';
import desert from './assets/YouMeal/Десерты.png';
import burg from './assets/YouMeal/free-icon-cheeseburger-2362255.png';
import { CatalogBurger, CatalogCombo, CatalogDessert, CatalogHotdog, CatalogPizza, CatalogShaurma, CatalogZakuski } from './components/burgers';
import MarketPlace from './components/market';
import { GlobalContext } from './components/context/contextProvider';
import CheckoutForm from './components/send';
////////////////////////////////////////
// const touchStartX = 0;
// const touchEndX = 0;

// const handleTouchStart = (e) => {
//   touchStartX = e.touches[0].clientX;
// };

// const handleTouchMove = (e) => {
//   touchEndX = e.touches[0].clientX;
// };

// const handleTouchEnd = () => {
//   const diffX = touchStartX - touchEndX;

//   if (Math.abs(diffX) > 50) { // Определите минимальное расстояние, чтобы считать жестом
//     if (diffX > 0) {
//       // Свайп влево
//       document.querySelector('.navigation__list').scrollBy({
//         left: 100,
//         behavior: 'smooth',
//       });
//     } else {
//       // Свайп вправо
//       document.querySelector('.navigation__list').scrollBy({
//         left: -100,
//         behavior: 'smooth',
//       });
//     }
//   }
// };

// document.querySelector('.navigation__list').addEventListener('touchstart', handleTouchStart);
// document.querySelector('.navigation__list').addEventListener('touchmove', handleTouchMove);
// document.querySelector('.navigation__list').addEventListener('touchend', handleTouchEnd);

function App() {
  /////////////////////////////

  
  //////////////////////////////
  const {} = useContext(GlobalContext);
const [active, setActive] = useState(0);

  const dataNavigation = [
    {title: 'бургеры', icon: burg, href: '/'},
    {title: 'закуски', icon: zakus, href: '/zakuski'},
    {title: 'хотдоги', icon: hotdog, href: '/hotdog'},
    {title: 'комбо', icon: combo, href: '/combo'},
    {title: 'шаурма', icon: shaurma, href: '/shaurma'},
    {title: 'пицца', icon: pizza, href: '/pizza'},
    {title: 'десерты', icon: desert, href: '/desert'},
  ]
  const handleClick = (index) => {
  setActive(index)
   
  }
  return (
    <div className="App">
      <header className='header'>
      <div className='header__logo'>Logo</div>
        <div className='header__title'>
        <img src={Burger} alt='burger'/>
        <div className='header__title__dscr'>
              <h1>Только самые сочные бургеры
              </h1>
             <p>бесплатная доставка</p>

            </div>
          
           
        
        </div>
       
      </header>
      <nav className='navigation'>
        <ul className='navigation__list'>
          {dataNavigation.map((item, i) =>{
            return  <li 
                        onClick={()=> handleClick(i)}
                        key={i}
                        className={`navigation__list__item ${active === i ? 'active' : '' }`}>
                          
                      <Link className='navigation__list__item__link' to={item.href}> <img src={item.icon} alt={item.title}></img>{item.title} </Link>
                    </li>
          })}
          
        </ul>
      </nav>
      <CheckoutForm/>
      <MarketPlace />
      <Routes>
      <Route path='/' element ={<CatalogBurger />} />
      <Route path='/zakuski' element={<CatalogZakuski />} />
      <Route path='/hotdog' element={<CatalogHotdog />} />
      <Route path='/combo' element={<CatalogCombo />} />
      <Route path='/shaurma' element={<CatalogShaurma />} />
      <Route path='/pizza' element={<CatalogPizza />} />
      <Route path='/desert' element={<CatalogDessert />} />
      <Route path='*' element={<h1 style={{paddingTop: '50px'}}>not found</h1>} />
    </Routes>
    </div>
  );
}

export default App;
