import './App.css';

import Adidas_new_component from './Adidas_new_component';

import Topbar from './Topbar';
import Navbar1 from './Navbar1';
import Component_1 from './Component_1';
import Bottom_text from './Bottom_text';
import Shoe_category from './Shoe_category';
import Footer_1 from './Footer_1';
import Bottom_bar from './Bottom_bar';

import Component_2 from './Component_2';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Navbar1/>
      <Component_1/>
      <Component_2/>
      
      <Adidas_new_component/>
     <Adidas_new_component/>
   
     <Bottom_text/>
     <Shoe_category/>
     <Footer_1/>
     <Bottom_bar/> 
   
    </div>
  );
}

export default App;
