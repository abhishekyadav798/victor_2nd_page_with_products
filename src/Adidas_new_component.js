import React,{useState,useEffect} from 'react'
import { Col,Row,Card,CardBody,CardImg } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css" 
import './Adidas_new_component.css'
import Suits from './images/suits.jpeg'
import Pro from './images/pro.jpeg'
import Design1 from './images/design1.jpg'
import Design2 from './images/design2.jpg'
import Design3 from './images/design3.jpg'
import Design4 from './images/design4.jpg'
import Shoe2 from './images/shoe2.jpeg'
import Shoe3 from './images/shoe3.jpeg'
import Shoe4 from './images/shoe4.jpeg'
import Shoe5 from './images/shoe5.jpeg'
import Shoe6 from './images/shoe6.jpeg'


function Adidas_new_component() {
    const [img1, finalimg1] = useState(Suits)
    const [img2,finalimg2] = useState(Design1)
    const [img3,finalimg3] = useState(Shoe3)
    const [img4,finalimg4] = useState(Shoe5)
    const [isShown,setIsShown] = useState(false)
    const [isShown2,setIsShown2] = useState(false)
    const [isShown3,setIsShown3] = useState(false)
    const [isShown4,setIsShown4] = useState(false)

    function handleMouseEnter1(){
        finalimg1(Pro)
    }

    function handleMouseEnter2(){
        finalimg1(Suits)
    }
    function handleMouseEnter3(){
        finalimg2(Design1)
    }
    function handleMouseEnter4(){
        finalimg2(Design2)
    }
    function handleMouseEnter5(){
        finalimg2(Design3)
    }
    function handleMouseEnter6(){
        finalimg2(Design4)
    }
    function handleMouseEnter7(){
        finalimg3(Shoe3)
    }
    function handleMouseEnter8(){
        finalimg3(Shoe4)
    }
    function handleMouseEnter9(){
        finalimg4(Shoe5)
    }
    function handleMouseEnter10(){
        finalimg4(Shoe6)
    }

  return (
    <div>
        <Row>
            <Col>
            <Card onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}>
                <CardImg variant="top" src={img1} /> 
                <CardBody >
                </CardBody>
                {isShown && (
                 <div>
                <img src={Pro} style={{height:"30px",width:"40px"}}  onMouseEnter={handleMouseEnter1}/>
                <img src={Suits} style={{height:"30px",width:"40px"}} onMouseEnter={handleMouseEnter2}/>  
                 </div>
                 )}
                 <h6>victor two piece</h6>
                 <a>handmade suit of cashmere wool</a>
            </Card>
            </Col>

            <Col>
            <Card onMouseEnter={() => setIsShown2(true)}
                  onMouseLeave={() => setIsShown2(false)}>
                <CardImg variant="top" src={img2} />
                
                <CardBody>
                </CardBody>
                {isShown2 && (
                 <div>
                 <img src={Design1} style={{height:"30px",width:"40px"}}  onMouseEnter={handleMouseEnter3}/>
                <img src={Design2} style={{height:"30px",width:"40px"}} onMouseEnter={handleMouseEnter4}/>
                <img src={Design3} style={{height:"30px",width:"40px"}} onMouseEnter={handleMouseEnter5}/>
                <img src={Design4} style={{height:"30px",width:"40px"}} onMouseEnter={handleMouseEnter6}/>  
                 </div>
                 )}
                 <h6>Running shoes</h6>
                 <a>suited for long distance running</a>
            </Card>
            </Col>

            <Col>
            <Card  onMouseEnter={() => setIsShown3(true)}
                  onMouseLeave={() => setIsShown3(false)}>
                <CardImg variant="top" src={img3} />
                <CardBody>

                </CardBody>
                {isShown3 && (
                 <div>
                <a href='#'> <img href="/" src={Shoe3} style={{height:"30px",width:"40px"}}  onMouseEnter={handleMouseEnter7}/></a>
                <img src={Shoe4} style={{height:"30px",width:"40px"}} onMouseEnter={handleMouseEnter8}/>
                
                 </div>
                 )}
                 <h6>Sneakers</h6>
                 <a>Fashionable and new design</a>
            </Card>
            </Col>

            <Col>
            <Card onMouseEnter={() => setIsShown4(true)}
                  onMouseLeave={() => setIsShown4(false)}>
                <CardImg variant="top" src={img4} />
                <CardBody>

                </CardBody>
                {isShown4 && (
                 <div>
                <a href='#'> <img href="/" src={Shoe5} style={{height:"30px",width:"40px"}}  onMouseEnter={handleMouseEnter9}/></a>
                <img src={Shoe6} style={{height:"30px",width:"40px"}} onMouseEnter={handleMouseEnter10}/>
                
                 </div>
                 )}
                 <h6>Loafers</h6>
                 <a>Comfortable leather casual shoes</a>
            </Card>
            </Col>
        </Row>

    </div>
  )
}

export default Adidas_new_component