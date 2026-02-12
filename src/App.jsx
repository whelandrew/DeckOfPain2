import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import "./styles.css";

import FrontOfCard from "./frontOfCard";
import BackOfCard from "./backOfCard";
import ControlPanel from "./controlPanel";
import UI from "./UI";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<header>Deck of Pain</header>
		<div>
			<div id="cardObjects">
				<FrontOfCard />
				<BackOfCard />
				<div id="UIDiv">
					<UI />			
				</div>				
			</div>
			<div id="controlPanel">
				<ControlPanel />
			</div>
		</div>
		<footer>Deets</footer>
    </>
  )
}

export default App
