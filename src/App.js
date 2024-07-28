
import './App.css';
import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {  BrowserRouter as Router , Route,Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = ()=> {
  const [progress, setProgress] = useState(0)

 

    return (
      <>
      
      <Router>
      
      <NavBar/>
    

      <LoadingBar
        color='#f11946'
        progress={progress}
        height = {4}
      />
      
       <Routes >
      <Route exact path="/" element={<News setProgress={setProgress}  />}/>
      <Route exact path="/home" element={<News setProgress={setProgress}/>}/>
      <Route exact path="/business" element={<News setProgress={setProgress} category="business" />}/>
      <Route exact path="/entertainment" element={<News setProgress={setProgress} category="entertainment"/>}/>
      <Route exact path="/health" element={<News setProgress={setProgress} category="health"/>}/>
      <Route exact path="/science" element={<News setProgress={setProgress} category="science"/>}/>
      <Route exact path="/sports" element={<News setProgress={setProgress} category="sports"/>}/>
      <Route exact path="/technology" element={<News setProgress={setProgress} category="technology"/>}/>
    
       </Routes>
     
      </Router>
      </>
    )
  
}

export default App ;