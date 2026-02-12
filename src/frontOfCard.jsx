import React from 'react';


import tempImage from './assets/workouts/abs.gif';

export default class FrontOfCard extends React.Component {    	
	constructor(props) {
		super(props);	
				
		this.state={
			cardWidth:256,
			cardHeight:414
		}
	}
    render() {
        return (
			
			<div id="frontOfCard" className="cardContainer"> 				
				<img 
					id="cardFaceImage"
					src={tempImage}
					/>
			</div>
		)
    }
}