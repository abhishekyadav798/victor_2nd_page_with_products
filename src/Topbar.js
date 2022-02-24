import React from 'react'
import {Row,Col} from 'reactstrap';
import './Topbar.css'


function Topbar() {
  return (
    <div>
        <Row id='my-style'>
            <Col>
            <a>Free Deliver For All orders</a>
            </Col>
            <Col>
            <a>Sign up & Get 15% Off</a>
            </Col>
            <Col>
            <a>Free Deliver For All orders</a>
            </Col>
        </Row>


    </div>
  )
}

export default Topbar