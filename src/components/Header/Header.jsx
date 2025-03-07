
import Button from '../Button/Button';
import Menu from '../Menu/Menu';
import { useNavigate } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { ThemeContext } from "../../context/context"
import useResize from '../../hooks/useResize';
import Burger from '../Burger/Burger';


export default function Header () {
    const navigate = useNavigate()
    const {toggleTheme} = useContext (ThemeContext);
    const width = useResize();
    return (
        <header className='header'>
            <div className="logo">DOG</div>
            
             {width > 768 && <Menu/>}
             {width <= 768 && <Burger/>}
             <Button onClick={()=>navigate('/contacts')} label="Контакты"/>
             <Button label='Сменить тему' onClick = {() =>toggleTheme()}/>
        </header>
    )
}