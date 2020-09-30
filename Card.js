import React,{Component} from 'react';
import Card from './CardUI';
import img1 from './assets/pate2.jpg';
import img2 from './assets/terrine.jpeg';
import img3 from './assets/codroe.jpg';

class Cards extends Component{
	render(){
		return(
			<div className="container-fluid d-flex justify-content-center">
				<div className="row">
				  <div className="col-md-4">
				  <Card imgsrc={img1} title="pate"/>
				  </div>
				  <div className="col-md-4">
				  <Card imgsrc={img2} title="terrine"/>
				  </div>
				  <div className="col-md-4">
				  <Card imgsrc={img3} title="codroe"/>
				  </div>

				   <div className="col-md-4">
				  <Card imgsrc={img1} title="pate"/>
				  </div>
				  <div className="col-md-4">
				  <Card imgsrc={img2} title="terrine"/>
				  </div>
				  <div className="col-md-4">
				  <Card imgsrc={img3} title="codroe"/>
				  </div>
				  </div>
				  </div>
		);
	}
}
export default Cards;