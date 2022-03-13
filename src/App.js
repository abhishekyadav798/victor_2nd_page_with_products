import './App.css';
import Div_hide from './Div_hide';
import MouseHover from './MouseHover';
import Adidas_shoe_component from './Adidas_shoe_component';
import Adidas_new_component from './Adidas_new_component';
import Text_overlay from './Text_overlay';
import Hover_div_hide from './Hover_div_hide';
import Topbar from './Topbar';
import Navbar1 from './Navbar1';
import Component_1 from './Component_1';
import Bottom_text from './Bottom_text';
import Shoe_category from './Shoe_category';
import Footer_1 from './Footer_1';
import Bottom_bar from './Bottom_bar';
import Component_shoe_1 from './Component_shoe_1';
import Carousel_try from './Carousel_try';
import Carousel_try_2 from './Carousel_try_2';
import Carousel_try_3 from './Carousel_try_3';
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
     {/* <Text_overlay/> */}

     {/* <Hover_div_hide/> */}
     <Bottom_text/>
     <Shoe_category/>
     <Footer_1/>
     <Bottom_bar/> 
    {/* <Component_shoe_1/> */}
    {/* <Carousel_try  /> */}
    {/* <Carousel_try_2/> */}
    {/* <Carousel_try_3/> */}

    </div>
  );
}

export default App;
