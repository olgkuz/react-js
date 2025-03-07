import { Link } from "react-router-dom";
import './Menu.css';
import {v4 as uuid} from 'uuid';
 
export default function Menu (){
    const MENU = [
        {title: 'Главная', to: "/", key:uuid()},
        {title: 'Обо мне ', to: "/", key:uuid()},
        {title: 'Блог', to:  "blog", key:uuid()},
        {title: 'Portfolio', to: "/", key:uuid()},
    ]
    return (
       
                <ul className='nav'>
                    {MENU.map(({title,to,key}) =>(
                    <Link  key={key} to={to}>{title} </Link>))}
                </ul>
       
    );
}