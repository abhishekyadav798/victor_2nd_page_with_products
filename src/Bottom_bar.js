import React from 'react'
import {Row,Col,Container} from 'reactstrap';
import './Bottom_bar.css'

function Bottom_bar() {
  return (
    <div id='style-footer'>
        <Row >

            <Col>
            <h5 >PRODUCTS</h5>
            <a>Footwear</a><br/>
            <a>Clothing</a><br/>
            <a>Accessories</a><br/>
            <a>Outlet-Sale</a><br/>
            <a>New Arrivals</a>
            </Col>
            <Col>
            <h5>SPORTS</h5>
            <a>Running</a><br/>
            <a>Football</a><br/>
            <a>Training</a><br/>
            <a>tennis</a><br/>
            <a>Basketball</a><br/>
            </Col>
            <Col>
            <h5>COLLECTIONS</h5>
            <a>Victor qUICK</a><br/>
            <a>Ultra fast</a><br/>
            <a>Sustainability</a><br/>
            <a>Victor color</a><br/>
            <a>Alpha</a><br/>
            </Col>
            <Col>
            <h5>SUPPORT</h5>
            <a>Help</a><br/>
            <a>Customer Services</a><br/>
            <a> Shipping</a><br/>
            <a>Track Order</a><br/>
            </Col>
            <Col>
            <h5>COMPANY INFO</h5>
            <a>About Us</a><br/>
            <a>Victor stories</a><br/>
            <a>Apps</a><br/>
            <a>Press</a><br/>
            <a>Careers</a><br/>
            </Col>

        </Row>
    </div>
  )
}

export default Bottom_bar