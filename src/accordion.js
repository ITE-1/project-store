import './accordion.scss';
import { useState } from 'react';


const AccordionItem = ({title, descr, curr}) => {
const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        setIsOpen((isOpen) => !isOpen);
        console.log(e.target);
    }
    return (
        <div className="accordion__item" onClick={(e) => handleClick(e)}>
        <h2>{title}</h2>
        <div className={`accordion__item__description ${isOpen ? 'hide': 'open'}`}>
            {descr}
        </div>
    </div>
    )
}
const Accordion = () => {
    const [currentActive, setCurrentActive] = useState(0);

    const data = [{
        id: 1,
        title: 'accordion item 1',
        descr: 'some dscr'
    },{
        id: 2,
        title: 'accordion item 2',
        descr: 'some dscr'
    },{
        id: 3,
        title: 'accordion item 3',
        descr: 'some dscr'
    },]

  

    return (
        <div className="accordion">
          {data.map((item, i) => {
            return <AccordionItem {...item}/>
          })}
           
        </div>
    )
}

export default Accordion;