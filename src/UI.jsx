import React from 'react';

export default class UI extends React.Component {    	
	constructor(props) {
		super(props);	
				
		this.state={
			cardWidth:256,
			cardHeight:414
		}
	}
    render() {
        return (			
			<div id="UI">
				<p>Time since last card was drawn</p>
				<p>51 of 52 Cards Remain</p>
			</div>
		)
    }
}