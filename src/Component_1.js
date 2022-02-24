import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb, BreadcrumbItem,Row,Col } from "reactstrap"
import './Component_1.css'
import Photo from './images/photo.jpg'

function Component_1() {
	return (

        <div>
		<div style={{display: 'block', width: 700, padding: 30}}>
			<Breadcrumb>
				<BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#">Men</a></BreadcrumbItem>
				<BreadcrumbItem active>Profile</BreadcrumbItem>
			</Breadcrumb>
            
            <div id='style'>
                
                    <h4>MEN'S RUNNING SHOES</h4>
                    <a>RUNNING SHOES</a>
                
            </div>
           
               
                
            
			
		</div>
        </div>
	);
}

export default  Component_1
    
