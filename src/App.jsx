


import './App.css'
import { Routes ,Route } from 'react-router-dom'
import  MainPage from './routes/MainPage/MainPage';

import Blog from './routes/Blog/Blog';



 function App() {
  

  return (
    
      <Routes>
         <Route path="/" element={<MainPage/>} /> 
         

         <Route path = "/blog" element = { <Blog/>}/>
       
     
      
     </Routes>
  
  )
}
 
export default App
