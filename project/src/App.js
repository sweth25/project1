import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Hospital from './components/hospital';
import Treatment from './components/treatment';
import Doctors from './components/doctors';
import Contact from'./components/contact';
import About from'./components/about';


function App() {
return (
< Router>
< main>
< Routes>

<Route path="/" element={<Hospital/>}/>
<Route path="/treatment" element={<Treatment/>}/>
<Route path="/doctors" element={<Doctors/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/about" element={<About/>}/>

</Routes>
</main>
</Router>
);
}


export default App;
