import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Card,CardBody,CardImg,CardText,CardTitle} from 'reactstrap'
import './Component_2.css'
import Photo from './images/photo.jpg'
import Neon1 from'./images/neon1.jpg'
import Neon2 from'./images/neon2.jpg'
import Neon3 from'./images/neon3.jpg'


function Component_2() {
  return (
     
    <div id="component-2" style={{backgroundImage:`url("https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max")`,height:"200px"}}>
    <Row>
        <Col md="2">
        <Card style={{ width: '12rem' }} id="my-card">
        <CardImg variant="top" src={Neon1} />
        <CardBody>
        <CardTitle>Card Title</CardTitle>
        <CardText>
        Some quick
        </CardText> 
        </CardBody>
        </Card>  
        </Col>

        <Col md="2">
        <Card style={{ width: '12rem' }} id="my-card">
        <CardImg variant="top" src={Neon2} />
        <CardBody>
        <CardTitle>Card Title</CardTitle>
        <CardText>
        Some quick
        </CardText>
        </CardBody>
        </Card>
        </Col>

        <Col md="2">
        <Card style={{ width: '12rem' }} id="my-card">
        <CardImg variant="top" src={Neon3} />
        <CardBody>
        <CardTitle>Card Title</CardTitle>
        <CardText>
        Some quick
        </CardText>  
        </CardBody>
        </Card>  
        </Col>
    </Row>
    </div>
  )
}

export default Component_2