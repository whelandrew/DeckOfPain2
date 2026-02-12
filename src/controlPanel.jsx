import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default class ControlPanel extends React.Component {    	
	constructor(props) {
		super(props);	
				
		this.state={
			cardWidth:256,
			cardHeight:414
		}
	}
		
    render() {
		function variationDropdown(val)
	{
		
	};
		//variations Beginner - Advanced
		
		//ruleset - KQJA = 11 / J=11 Q=12 K=13 A=14
		//draw a card
		//number of cards left/used
		//time of how long card has been drawn
		
        return (			
			<div id="controlPanel"> 								
			<h2>Control Panel</h2>
				<p>
					<Dropdown>
						<Dropdown.Toggle variant="success" id="dropdown-basic">
							Variation
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href={variationDropdown(0)}>Beginner</Dropdown.Item>
							<Dropdown.Item href={variationDropdown(1)}>Advanced</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>				
					<button>Draw A Card</button>
				</p>				
			</div>
		)
    }
}