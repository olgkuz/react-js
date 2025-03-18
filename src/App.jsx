


import './App.css'
import { Routes ,Route } from 'react-router-dom'
import  MainPage from './routes/MainPage/MainPage';

import Blog from './routes/Blog/Blog';

import { ThemeContext } from './context/context';
import { useState } from 'react';



 function App() {
  
 const [theme,setTheme] = useState ('light');
 const toggleTheme =() =>{
  theme === 'light' ? setTheme('dark') : setTheme ('light')
 }
  return (
      <ThemeContext.Provider value={{theme,toggleTheme}}>
      <Routes>
         <Route path="/" element={<MainPage/>} /> 
         

         <Route path = "/blog" element = { <Blog/>}/>
       
     
      
     </Routes>
  </ThemeContext.Provider>
  )
}
 
export default App
