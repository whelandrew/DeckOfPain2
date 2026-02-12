import React from 'react';

import tempIcon from "./assets/cardIcons/club.png";

export default class BackOfCard extends React.Component {    	
	constructor(props) {
		super(props);	
				
		this.state={
			cardWidth:256,
			cardHeight:414
		}
	}
    render() {
        return (			
			<div id="backOfCard" className="cardContainer">
				<div>
					<h4>Back of Card</h4>
					<img id="cardIdon" src={tempIcon}/>
					
					<p>Time since last card was drawn</p>
					<p>51 of 52 Cards Remain</p>
				</div>
			</div>
		)
    }
}